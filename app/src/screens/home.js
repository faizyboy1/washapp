import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styling/global-styling';

export default function home({ navigation }) {
    return (
        <View style={globalStyles.loginView}>
            <Text style={{textAlign:"center"}} onPress={() => navigation.navigate("ConfirmAddress")}>
                Make a new booking
            </Text>
        </View>
    );
}