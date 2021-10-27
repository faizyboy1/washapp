import React from 'react';
import { NativeBaseProvider, HStack, VStack, Text } from "native-base"
import { View } from "react-native";
import {globalStyles} from "../styling/global-styling";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Divider from '../components/divider';
import Badge from '../components/badge';

export default function records() {
    return (
        <View style={globalStyles.termsHeader}>
            <NativeBaseProvider>
                <Badge title="SCHEDULED"/>
                <HStack space={4} alignItems="center">
                    <VStack>
                        <Text> Sunday </Text>
                        <Text> Oct 24, 2021 </Text>
                    </VStack>
                    <Text w="20"> 3:00 pm </Text>
                    <Text w="20"> Family Car </Text>
                    <Icon size={20} name="pencil" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
                <HStack space={4} alignItems="center">
                    <VStack>
                        <Text> Sunday </Text>
                        <Text> Oct 24, 2021 </Text>
                    </VStack>
                    <Text w="20"> 3:00 pm </Text>
                    <Text w="20"> Family Car </Text>
                    <Icon size={20} name="pencil" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
                <HStack space={4} alignItems="center">
                    <VStack>
                        <Text> Sunday </Text>
                        <Text> Oct 24, 2021 </Text>
                    </VStack>
                    <Text w="20"> 3:00 pm </Text>
                    <Text w="20"> Family Car </Text>
                    <Icon size={20} name="pencil" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
                <HStack space={4} alignItems="center">
                    <VStack>
                        <Text> Sunday </Text>
                        <Text> Oct 24, 2021 </Text>
                    </VStack>
                    <Text w="20"> 3:00 pm </Text>
                    <Text w="20"> Family Car </Text>
                    <Icon size={20} name="pencil" style={globalStyles.rescheduleIcon}/>
                </HStack>
                <Divider />
                <HStack space={4} alignItems="center">
                    <VStack>
                        <Text> Sunday </Text>
                        <Text> Oct 24, 2021 </Text>
                    </VStack>
                    <Text w="20"> 3:00 pm </Text>
                    <Text w="20"> Family Car </Text>
                    <Icon size={20} name="pencil" style={globalStyles.rescheduleIcon}/>
                </HStack>
            </NativeBaseProvider>
        </View>
    );
}