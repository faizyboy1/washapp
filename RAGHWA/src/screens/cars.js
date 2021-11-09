import React, {useState} from 'react';
import {NativeBaseProvider, HStack, Image, VStack, Button} from 'native-base';
import {View, Text} from 'react-native';
import {globalStyles} from '../assets/style/global-styling';
import Divider from '../components/divider';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import axios from "axios";

export default function carList() {
    const [cars, setCars] = useState([]);

    const carCard = (car) => {
        return (
            <HStack space={4} alignItems="center">
                <Icon size={60} name="car-side" style={{color: 'blue'}} />
                <VStack w="40">
                    <Text style={globalStyles.textAlignment}> {car.name} </Text>
                    <Text style={globalStyles.textAlignment}> {car.plate_number} </Text>
                </VStack>
                <Icon size={20} name="edit" style={globalStyles.rescheduleIcon} />
                <Icon size={20} name="trash" style={globalStyles.rescheduleIcon} />
            </HStack>
        )
    };

    const carsList = (token) => {
        console.log('receiving token:' + token);
        axios.get('https://wash.cm.codes/api/cars', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(response => {(setCars(response.data))}).catch(error => console.log(error)); //setCars(response.data)
    };

    return (
        <View style={globalStyles.termsHeader}>
            <NativeBaseProvider>
                <Button mt="2" onPress={() => carsList('')}>List</Button>
                {cars.map(car =>carCard(car))}
            </NativeBaseProvider>
        </View>
    );
}
