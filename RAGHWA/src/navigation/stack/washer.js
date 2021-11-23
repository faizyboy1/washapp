import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Confirm from '../../screens/bookings/confirm';

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
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
};
