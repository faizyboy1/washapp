import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Terms from '../screens/Terms';
import Drawer from './drawer';
import Cars from '../screens/cars';
import CarForm from '../screens/cars/form';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import OnBoarding from '../screens/Onboarding';
import Washer from '../screens/bookings/Washer';
import {AppContext} from '../utils/AppContext';
import Book from '../screens/bookings/Create';
import Details from '../screens/bookings/Details';
import {useTranslation} from 'react-i18next';
import {Button} from "native-base";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";

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
  const {token, user, onboarding,setToken} = useContext(AppContext);
    const navigation = useNavigation();

  const {t} = useTranslation();
    const logout = () => {
        setToken(null);
        return navigation.navigate('Login');
    };


    const renderScreens = () => {

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
    //   user.is_washter = true;
    if (user.is_washer) {
      return (
        <>
          <Stack.Screen
            name="Washer"
            // options={{...options, title: t('Washer')}}
            component={Washer}
            options={{
                headerTitleStyle: fontStyle,
                drawerStyle: fontStyle,
                headerTitle: t('Raghwa'),
                headerRight: () => (
                    <Button
                        size={'lg'}
                        width={40}
                        p={2}
                        m={5}
                        leftIcon={ <MaterialCommunityIcons
                            size={25}
                            name={'logout'}
                          color="white" />}
                        onPress={() => logout()}>

                        {t('logout')}
                    </Button>
                ),
            }}
          />
            <Stack.Screen
                name="Details"
                options={{...options, title: t('Book Details')}}
                component={Details}
            />

            <Stack.Screen name="Login" component={Login} options={{...options, title: t('Login'), headerShown: false}} />
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
        <Stack.Screen name="CarForm" component={CarForm} options={{...options, title: t('Car Form')}} />

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
        <Stack.Screen name="Login" component={Login} options={{...options, title: t('Login'), headerShown: false}} />
      </>
    );
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {renderScreens()}
    </Stack.Navigator>
  );
};
