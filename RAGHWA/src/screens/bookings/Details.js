import React, {useContext, useEffect, useRef, useState} from 'react';
import {Box, Button, Divider, HStack, Text, Toast, useDisclose, VStack,} from 'native-base';
import {useTranslation} from 'react-i18next';
import {request} from '../../utils/useRequest';
import {AppContext} from '../../utils/AppContext';
import {globalStyles} from '../../assets/style/global-styling';
import Spinner from "../../components/spinner";

export default ({route, navigation}) => {

    const {t} = useTranslation();
    const {isOpen, onOpen, onClose} = useDisclose();
    const initialFocusRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const {user, setUser, car, tokenHeader} = useContext(AppContext);
    const booking = route.params;
    // useEffect(() => {

    // console.log(route.params);
    // if (route.params.id) {
    //     setBooking(route.params);
    //     setLoading(false);
    // }
    // const id = route.params?.id;
    // if (!id) {
    //     return;
    // }
    //
    // const {color, plate_number, name, type} = route.params;
    //
    // setEditMode(true);
    // setId(id);
    // setName(name);
    // setColor(color);
    // setPlateNumber(plate_number);
    // setType(type);
    // }, []);


    const postStatus = (data) => {
        // const data = {status};
        const params = {
            ...tokenHeader,
            ...{
                method: 'post',
                url: `/bookings/status/${booking.id}`,
                data,
            },
        };

        request(params)
            .then(response => {
                let bookings = user.washer_bookings.filter(booking => booking.id !== response.data.id)

                bookings.unshift(response.data);
                user.washer_bookings = bookings;
                setUser(user);
                Toast.show({
                    text: t('Booking Status Updated Successfully'),
                    status: 'success',
                    navigate: navigation.navigate('Washer'),
                });
            })
            .catch(error => alert(error));
    }

    function washerActions() {
        if (!user.is_washer) return;
        const isConfirmed = booking.booking_status_id === 2
        const isCancelled = booking.booking_status_id === 4
        return (
            <Box>
                <HStack space={4} alignItems="center">
                    <Button
                        isDisabled={isConfirmed || isCancelled}
                        borderColor={'primary.200'}
                        borderWidth={2}
                        mt={1}
                        onPress={() => postStatus({status: 2})}>
                        {t('Confirm')}
                    </Button>
                    <Button
                        isDisabled={isConfirmed || isCancelled}
                        borderColor={'danger.200'}
                        borderWidth={2}
                        mt={1}
                        onPress={() => postStatus({status: 4})}>
                        {t('Cancel')}
                    </Button>
                </HStack>
                <Divider my="2"/>
                <HStack space={4} alignItems="center" justifyContent='space-between' mx={5} px={5}>
                    <Box>
                        <Button
                            isDisabled={!isConfirmed || isCancelled}
                            borderColor={'primary.200'}
                            borderWidth={2}
                            mt={1}
                            onPress={() => postStatus({is_started: true})}>
                            {t('Started')}
                        </Button>
                        <Text>
                            {booking.started_at}
                        </Text>
                    </Box>
                    <Box>
                        <Button
                            isDisabled={!isConfirmed || isCancelled}
                            borderColor={'primary.200'}
                            borderWidth={2}
                            mt={1}
                            onPress={() => postStatus({is_finished: true})}>
                            {t('Finished')}
                        </Button>
                        <Text>
                            {booking.finished_at}
                        </Text>
                    </Box>
                </HStack>
            </Box>
        )
    }

    // if(loading) return <Spinner/>
    console.log(booking);
    return (
        <>
            <VStack w="40">
                <Text style={globalStyles.termSectionTitle}>{t('Customer Details')}</Text>
                <Text style={globalStyles.textAlignment}> {booking.client.name} </Text>
                <Text style={globalStyles.textAlignment}> {booking.client.phone} </Text>
            </VStack>

            <VStack w="40">
                <Text style={globalStyles.termSectionTitle}>{t('Car Details')}</Text>
                <Text style={globalStyles.textAlignment}> {booking.car.name} </Text>
                <Text style={globalStyles.textAlignment}> {booking.car.color} </Text>
                <Text style={globalStyles.textAlignment}> {booking.car.plate_number} </Text>
            </VStack>
            <VStack w="40">
                <Text style={globalStyles.termSectionTitle}>{t('Services')}</Text>
                {booking.services.map(service => {
                    return (<Box>
                        <Text style={globalStyles.textAlignment}> {service.name} </Text>
                    </Box>)
                })}
            </VStack>
            {!booking.is_paid && <Text bg={'red.100'}
                                       style={globalStyles.textAlignment}> {booking.total_amount} SAR {t('Not Paid')}</Text>}

            <Divider my="2"/>

            {washerActions()}
        </>
    );
};
