import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from '../styling/global-styling';

export default function home({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate("Terms")} // We added an onPress event which would navigate to the About screen
            />
        </View>
    );
}