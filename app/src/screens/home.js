import React from 'react';
import { View, Text, Switch } from 'react-native';
import { globalStyles } from '../styling/global-styling';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function home({ navigation }) {
    return (
        <View style={globalStyles.loginView}>
            <Text style={{textAlign:"center"}} onPress={() => navigation.navigate("ConfirmAddress")}>
                Make a new booking
            </Text>
        </View>
    );
}

