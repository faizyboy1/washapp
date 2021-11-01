import React from 'react';
import {NativeBaseProvider, HStack, Image, Text, Avatar, VStack, Button} from "native-base"
import { View } from "react-native";
import {globalStyles} from "../styling/global-styling";
import Divider from '../components/divider';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const logoImage = require("../assets/no-car.png");

export default function cars({navigation}) {
    return (
        <View style={globalStyles.termsHeader}>
            <NativeBaseProvider>
                <HStack space={4} alignItems="center">
                    <Icon size={60} name="car-side" style={{color: "blue"}}/>
                    <VStack w="40">
                        <Text> Mahmood Lexus </Text>
                        <Text> 0602 </Text>
                    </VStack>
                    <Icon size={20} name="edit" style={globalStyles.rescheduleIcon}/>
                    <Icon size={20} name="trash" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
                <HStack space={4} alignItems="center">
                    <Icon size={60} name="car-side" style={{color: "green"}}/>
                    <VStack w="40">
                        <Text> Yousif Honda </Text>
                        <Text> 23452 </Text>
                    </VStack>
                    <Icon size={20} name="edit" style={globalStyles.rescheduleIcon}/>
                    <Icon size={20} name="trash" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
                <HStack space={4} alignItems="center">
                    <Icon size={60} name="car-side" style={{color: "red"}}/>
                    <VStack w="40">
                        <Text> Mohammed Kia </Text>
                        <Text> 201195 </Text>
                    </VStack>
                    <Icon size={20} name="edit" style={globalStyles.rescheduleIcon}/>
                    <Icon size={20} name="trash" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
                <HStack space={4} alignItems="center">
                    <Icon size={60} name="car-side" style={{color: "black"}}/>
                    <VStack w="40">
                        <Text> Ahmed Accord </Text>
                        <Text> 77674 </Text>
                    </VStack>
                    <Icon size={20} name="edit" style={globalStyles.rescheduleIcon}/>
                    <Icon size={20} name="trash" style={globalStyles.rescheduleIcon}/>
                </HStack>
            </NativeBaseProvider>
        </View>
    );
}