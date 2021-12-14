import React, {useContext, useEffect, useState} from 'react';
import {
    Button,
    Divider,
    HStack,
    NativeBaseProvider,
    Spinner,
    Toast,
    VStack,
    Icon,
} from 'native-base';
import {FlatList, Text, View} from 'react-native';
import {globalStyles} from '../../assets/style/global-styling';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {request, useAuthRequest} from '../../utils/useRequest';
import {AppContext} from '../../utils/AppContext';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default ({navigation}) => {
    const {user, setUser, tokenHeader} = useContext(AppContext);
    const [cars, setCars] = useState(user.cars);
    const [loading, setLoading] = useState(false);
    const {t} = useTranslation();

    const remove = id => {
        setLoading(true);
        const params = {
            ...tokenHeader,
            ...{
                method: 'delete',
                url: `cars/${id}`,
            },
        };
        request(params)
            .then(response => {
                Toast.show({
                    description: t('Car Deleted Successfully'),
                    status: 'success',
                });

                setCars(cars => cars.filter(car => car.id !== id));
                user.cars = cars;
                setUser(user);
            })
            .catch(error => {
                console.log(error.message);
                Toast.show({
                    status: 'error',
                    description: error.response?.data?.message ?? t('Error'),
                    title: t('Something went wrong'),
                });
            });
        setLoading(false);
    };

    const carCard = car => {
        return (
            <>
                <HStack space={4} alignItems="center">
                    <Icon as={Ionicons} name="car-sport" size={60} style={{color: car.color}}/>
                    <VStack w="40">
                        <Text style={globalStyles.textAlignment}> {car.name} </Text>
                        <Text style={globalStyles.textAlignment}> {car.plate_number} </Text>
                    </VStack>

                    <Icon
                        size={6}
                        as={FontAwesome5}
                        name="edit"
                        onPress={() => navigation.navigate('CarForm', car)}
                        style={globalStyles.rescheduleIcon}
                    />
                    <Icon
                        size={6}
                        as={FontAwesome5}
                        name="trash"
                        style={{color: '#e04747'}}
                        onPress={() => remove(car.id)}
                    />
                </HStack>
                <Divider my="2"/>
            </>
        );
    };

    return (
        <View style={globalStyles.termsHeader}>
            <NativeBaseProvider>
                <Button
                    size={'lg'}
                    width={40}
                    px={2}
                    m={2}
                    leftIcon={<Icon as={FontAwesome5} name="plus" size={4} type="Ionicons" color="white"/>}
                    onPress={() => navigation.navigate('CarForm')}>
                    {t('Add New Car')}

                </Button>

                <Divider my="2"/>

                {loading ? (
                    <Spinner mt={20} color="cyan.500"/>
                ) : (
                    <FlatList data={cars} renderItem={car => carCard(car.item)}/>
                )}
            </NativeBaseProvider>
        </View>
    );
};
