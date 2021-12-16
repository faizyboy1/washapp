import React, {useContext, useEffect, useState} from 'react';
import {
    Box,
    Button,
    Text,
    View,
    Radio,
    HStack,
    Flex,
    Divider,
    Checkbox,
    VStack,
    ScrollView,
    Spinner, Center, Toast,
} from 'native-base';
import Coupon from './Coupon';
import {useTranslation} from 'react-i18next';
import CardPayment from './CardPayment';
import {AppContext} from '../../utils/AppContext';
import header from 'react-native/Libraries/NewAppScreen/components/Header';
import {request} from '../../utils/useRequest';
import {Alert} from 'react-native';

export default ({navigation, route}) => {
    const {tokenHeader} = useContext(AppContext);
    const {car, slot, region} = route.params;
    const [couponDiscount, setCouponDiscount] = useState(null);
    const [total, setTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [vat, setVat] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(2);
    const [services, setServices] = useState([]);
    const [mainService, setMainService] = useState(null);
    const [coupon, setCoupon] = useState(null);
    const [extraServices, setExtraServices] = useState([]);
    const {t} = useTranslation();
    const carType = car?.car_type_id == 2 ? 'family' : 'sedan';
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            request({...tokenHeader, ...{url: '/services'}}).then(response => {
                setLoading(false);
                setServices(response.data);
            });
        };
        fetchServices();
    }, []);

    useEffect(() => {
        if (services.length) {
            calculateTotal();
        }
    }, [couponDiscount, mainService, extraServices]);

    const calculateTotal = () => {
        // get price for the main service
        // let selectedServices = [...extraServices, mainService];
        if (!services.length || !mainService) {
            return;
        }
        let sumServices = services.reduce((n, service) => {
            if (extraServices?.includes(service.id) || service.id == mainService) {
                return n + service[carType + '_price'];
            }
            return n + 0;
        }, 0);

        // get
        setTotal(sumServices);
        const discount = typeof couponDiscount === 'number' ? couponDiscount : 0;
        const totalWithDiscount = sumServices - sumServices * (discount / 100);
        setVat(totalWithDiscount * 0.15);
        setTotalAmount(totalWithDiscount + totalWithDiscount * 0.15);
    };

    const submit = () => {

        if (!mainService) {
            Toast.show({
                text: t('Please select the main service'),
                status: 'error',
            });
            return
        }
        let selectedServices = [mainService, ...extraServices];

        const data = {
            booked_date: '14-11-2021',
            address_id: 1, //todo insert new address if there is no address
            region,
            payment_method_id: paymentMethod,
            car_id: car.id,
            services: selectedServices,
            slot_id: slot.id,
            coupon,
        };

        request({
            ...tokenHeader,
            ...{
                method: 'post',
                url: '/bookings',
                data,
            },
        })
            .then(r => Alert.alert(t('Success', 'Success')))
            .catch(e => console.log(e));
    };

    const renderPaymentMethod = () => {
        if (paymentMethod == 1) {
            return;
        }

        return <CardPayment/>;
    };

    const renderExtraServices = () => {
        // as per customer requirement, in the first release, the services should be hardcoded
        if (!services.length) {
            return;
        }

        return services.slice(3).map(service => {
            return (
                <Box
                    _dark={{
                        borderColor: "gray.600",
                    }}
                    borderColor="coolGray.400"
                    p={2}
                    flexDirection="row" alignItems='center' justify="space-between"
                >
                    <Checkbox value={service.id} mx="2">
                    </Checkbox>
                    <Text> {service.name}</Text>
                    <Text color={'red.800'}> {service[carType + '_price'] + ' SAR'}</Text>
                </Box>
            );
        });
    };

    const renderMainServices = () => {
        if (!services.length) {
            return;
        }
        return services.map((service, index) => {
            if (index < 3) {
                return (

                    <Box
                        _dark={{
                            borderColor: "gray.600",
                        }}
                        borderColor="coolGray.400"
                        p={2}
                        flexDirection="column" alignItems='center' justifyContent="space-between"
                    >
                        <Radio value={service.id} my="1" flex={1}>
                        </Radio>
                        <Text> {service.name}</Text>
                        <Text color={'red.800'}> {service[carType + '_price'] + ' SAR'}</Text>
                    </Box>
                );
            }
        });
    };

    if (loading) {
        return <Spinner color={'cyan.100'}/>;
    }

    return (
        <ScrollView m={4}>
            <Flex direction={'row'} justify={'space-between'} my={3}>
                <Text>{car.name}</Text>
                <Text>{slot.slot_date + ' ' + slot.name}</Text>
            </Flex>
            <Divider my={3}/>
            <Text>{t('Main Service')}</Text>
            <Radio.Group
                defaultValue="1"
                name="paymentMethod"
                onChange={nextValue => {
                    setMainService(nextValue);
                }}>
                <HStack justify={'center'} space={4}>
                    {renderMainServices()}
                </HStack>
            </Radio.Group>

            <Divider my={3}/>
            <Text>{t('Raghwa Extra Service')}</Text>
            <Checkbox.Group
                colorScheme="green"
                size={"2xl"}
                defaultValue={extraServices}
                accessibilityLabel="pick an item"
                onChange={values => {
                    setExtraServices(values || []);
                }}>
                <VStack justify={'center'} flex={1}>
                    {renderExtraServices()}
                </VStack>
            </Checkbox.Group>
            <Divider my={3}/>
            <Center>
                <HStack space={7} alignItems="center" justify="center" my={2}>
                    <VStack alignItems="center">
                        <Text>{t('Total')}</Text>
                        <Text>{total}</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Text>{t('VAT')}</Text>
                        <Text>{vat}</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Text>{t('Total Amount')}</Text>
                        <Text>{totalAmount}</Text>

                    </VStack>
                    {/*{typeof couponDiscount === 'number' && (*/}
                    {/*  <Text>*/}
                    {/*    {t('Discount')}% {couponDiscount}*/}
                    {/*  </Text>*/}
                    {/*)}*/}
                </HStack>
            </Center>
            <Divider my={3}/>
            <Coupon
                coupon={coupon}
                setCoupon={setCoupon}
                couponDiscount={couponDiscount}
                setCouponDiscount={setCouponDiscount}
            />
            <Divider my={3}/>
            <Radio.Group
                mb={5}
                defaultValue="2"
                name="paymentMethod"
                onChange={nextValue => {
                    setPaymentMethod(nextValue);
                }}>
                <HStack space={3} alignItems="center">
                    <Radio value="2" my="1">
                        {t('Card')}
                    </Radio>
                    <Radio value="1" my="1">
                        {t('Cash')}
                    </Radio>
                </HStack>
            </Radio.Group>
            {renderPaymentMethod()}
            <Button onPress={submit}>
                {paymentMethod == 2 ? t('Confirm & Pay') : t('Confirm')}
            </Button>
        </ScrollView>
    );
};
