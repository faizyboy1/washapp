import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styling/global-styling';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {HStack, NativeBaseProvider} from "native-base";

export default function tellFriend() {
    return (
        <View style={globalStyles.tellHeader}>
            <Text style={globalStyles.tellSectionTitle}>Your Friends Deserve The best, Share our App with them!</Text>
            <NativeBaseProvider>
                <HStack space={20} alignItems="center" justifyContent="center" mt={20}>
                    <Icon name="twitter" size={40} color="#08a0e9" />
                    <Icon name="instagram" size={40} color="#515BD4" />
                    <Icon name="whatsapp" size={40} color="#25D366" />
                </HStack>
            </NativeBaseProvider>
        </View>
    );
}