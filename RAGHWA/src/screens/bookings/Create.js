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
  Spinner,
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
  const [mainService, setMainService] = useState(1);
  const [coupon, setCoupon] = useState(null);
  const [extraServices, setExtraServices] = useState();
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
    if (!services.length) {
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

    return <CardPayment />;
  };

  const renderExtraServices = () => {
    // as per customer requirement, in the first release, the services should be hardcoded
    if (!services.length) {
      return;
    }
    return services.slice(3).map(service => {
      return (
        <Checkbox value={service.id} my="1">
          {service.name + ' : ' + service[carType + '_price']}
        </Checkbox>
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
          <Radio value={service.id} my="1">
            {service.name + ' : ' + service[carType + '_price']}
          </Radio>
        );
      }
    });
  };

  if (loading) {
    return <Spinner color={'cyan.100'} />;
  }

  return (
    <ScrollView m={4}>
      <Flex direction={'row'} justify={'space-between'} my={3}>
        <Text>{car.name}</Text>
        <Text>{slot.slot_date + ' ' + slot.name}</Text>
      </Flex>
      <Divider my={3} />
      <Text>{t('Main Service')}</Text>
      <Radio.Group
        defaultValue="1"
        name="paymentMethod"
        onChange={nextValue => {
          setMainService(nextValue);
        }}>
        {renderMainServices()}
      </Radio.Group>

      <Divider my={3} />
      <Text>{t('Extra Service')}</Text>
      <Checkbox.Group
        colorScheme="green"
        defaultValue={extraServices}
        accessibilityLabel="pick an item"
        onChange={values => {
          setExtraServices(values || []);
        }}>
        {renderExtraServices()}
      </Checkbox.Group>
      <Divider my={3} />
      <HStack space={3} alignItems="center" my={5}>
        <Box>
          <Text>{t('Total') + ': ' + total}</Text>
          <Text>{t('VAT') + ': ' + vat}</Text>
          <Text>{t('Total Amount') + ': ' + totalAmount}</Text>
          {typeof couponDiscount === 'number' && (
            <Text>
              {t('Discount')}% {couponDiscount}
            </Text>
          )}
        </Box>
        <Coupon
          coupon={coupon}
          setCoupon={setCoupon}
          couponDiscount={couponDiscount}
          setCouponDiscount={setCouponDiscount}
        />
      </HStack>
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
