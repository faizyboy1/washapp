import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Terms from '../../screens/terms';
import Drawer from '../drawer';
import Cars from '../../screens/cars';
import CarForm from '../../screens/cars/form';
import Login from "../../screens/auth/login";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#14b8a6',
  },
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{headerShown: false}}
      />
      <Stack.Screen name="CarForm" component={CarForm} />
      <Stack.Screen name="Terms and Conditions" component={Terms} />
      <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
