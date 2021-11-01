import React from 'react';
import { NativeBaseProvider, HStack, VStack, Text } from "native-base"
import { View } from "react-native";
import {globalStyles} from "../styling/global-styling";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Divider from '../components/divider';

export default function records() {
    return (
        <View style={globalStyles.termsHeader}>
            <NativeBaseProvider>
                <HStack space={4} alignItems="center">
                    <VStack>
                        <Text> Sunday </Text>
                        <Text> Oct 24, 2021 </Text>
                    </VStack>
                    <Text w="20"> 3:00 pm </Text>
                    <Text w="20"> Family Car </Text>
                    <Icon size={20} name="edit" style={globalStyles.rescheduleIcon}/>
                    <Icon size={20} name="edit" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
                <HStack space={4} alignItems="center">
                    <VStack>
                        <Text> Sunday </Text>
                        <Text> Oct 24, 2021 </Text>
                    </VStack>
                    <Text w="20"> 3:00 pm </Text>
                    <Text w="20"> Family Car </Text>
                    <Icon size={20} name="edit" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
            </NativeBaseProvider>
        </View>
    );
}