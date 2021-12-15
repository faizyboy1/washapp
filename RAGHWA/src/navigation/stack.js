import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Terms from '../screens/Terms';
import Drawer from './drawer';
import Cars from '../screens/cars';
import CarForm from '../screens/cars/form';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import OnBoarding from '../screens/Onboarding';
import ConfirmBooking from '../screens/bookings/confirm';
import {AppContext} from '../utils/AppContext';
import Book from '../screens/bookings/Create';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#14b8a6',
  },
};

const fontStyle = {
  fontFamily: 'Almarai-Bold',
  // color: '#0d5e5c',
  fontWeight: '600',
  // fontStyle: 'normal',
};

const options = {
  headerTitleStyle: fontStyle,
  drawerStyle: fontStyle,
  drawerLabelStyle: {
    fontFamily: 'Almarai-Bold',
    // color: '#0d5e5c',
    fontWeight: '600',
    // fontStyle: 'normal',
  },
};

export default () => {
  const {token, user, onboarding} = useContext(AppContext);
  const {t} = useTranslation();
  const renderScreens = () => {
    console.log('from drawer', token);

    if (!token) {
      return (
        <>
          {!onboarding && (
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{headerShown: false}}
            />
          )}
          <Stack.Screen
            name="Login"
            options={{...options, title: t('Login'), headerShown: false}}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{...options, title: t('Register')}}
            component={Register}
          />
          <Stack.Screen
            name="Terms and Conditions"
            options={{...options, title: t('Terms')}}
            component={Terms}
          />
        </>
      );
    }

    // return <Home />;
    const isWasher = false; //@todo needs to be fetch from storage/api
    if (isWasher) {
      return (
        <>
          <Stack.Screen
            name="ConfirmBooking"
            options={{...options, title: t('Washer')}}
            component={ConfirmBooking}
          />
        </>
      );
    }
    return (
      <>
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="CarForm" component={CarForm} />

        <Stack.Screen
          name="Cars"
          options={{...options, title: t('Cars')}}
          component={Cars}
        />
        <Stack.Screen
          name="Book"
          options={{...options, title: t('Book')}}
          component={Book}
        />
        <Stack.Screen name="Login" component={Login} />
      </>
    );
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {renderScreens()}
    </Stack.Navigator>
  );
};
