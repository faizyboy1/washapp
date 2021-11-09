import React, {useEffect, useState} from 'react';
import {Button, HStack, NativeBaseProvider, VStack} from 'native-base';
import {FlatList, Text, View} from 'react-native';
import {globalStyles} from '../../assets/style/global-styling';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import authRequest from '../../components/axios/auth-request';

export default function carList({navigation}) {
    const [cars, setCars] = useState([]);

    const carCard = car => {
        return (
            <HStack space={4} alignItems="center">
                <Icon size={60} name="car-side" style={{color: 'blue'}}/>
                <VStack w="40">
                    <Text style={globalStyles.textAlignment}> {car.name} </Text>
                    <Text style={globalStyles.textAlignment}> {car.plate_number} </Text>
                </VStack>

                <Icon size={20} name="edit" onPress={() => navigation.navigate('CarForm', car)}
                      style={globalStyles.rescheduleIcon}/>
                <Icon size={20} name="trash" onPress={()=>removeCar(car.id)} style={globalStyles.rescheduleIcon}/>
            </HStack>
        );
    };

    const removeCar = (id) => {
        authRequest.delete(`cars/${id}`).then(response => alert('Success'))
    }

    useEffect(() => {
        authRequest.get('cars').then(response => setCars(response.data));
    }, []);

    return (
        <View style={globalStyles.termsHeader}>
            <NativeBaseProvider>
                <Button onPress={() => navigation.navigate('CarForm')}>Add new Cars</Button>
                <FlatList data={cars} renderItem={car => carCard(car.item)}/>
            </NativeBaseProvider>
        </View>
    );
}
