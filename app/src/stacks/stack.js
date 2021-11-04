import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Terms from '../screens/terms';
import Login from '../screens/login';
import Register from '../screens/register';
import Drawer from './drawer';
import Book from '../screens/book';
import ConfirmAddress from '../screens/confirmAddress';
import addCar from '../screens/addCar';

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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Terms and Conditions" component={Terms} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="ConfirmAddress" component={ConfirmAddress} />
      <Stack.Screen name="addCar" component={addCar} />
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
