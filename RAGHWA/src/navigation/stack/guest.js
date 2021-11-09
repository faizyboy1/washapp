import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Terms from '../../screens/terms';
import Login from '../../screens/auth/login';
import Register from '../../screens/auth/register';
import OnBoarding from '../../screens/tour';
import Drawer from "../drawer";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#14b8a6',
    },
};

export default () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="OnBoarding"
                component={OnBoarding}
                options={{headerShown: false}}
            />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Terms and Conditions" component={Terms}/>
            <Stack.Screen
                name="Drawer"
                component={Drawer}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};
