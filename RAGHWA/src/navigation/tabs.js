import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import i18n from '../locals/index';
import History from '../screens/bookings/records-history';
import Scheduled from '../screens/bookings/records-upcoming';
import {useTranslation} from 'react-i18next';

const Tabs = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const {t} = useTranslation();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#0f766e',
        tabBarIndicatorStyle: {
          backgroundColor: '#14b8a6',
        },
      }}>
      <Tabs.Screen
        name="History"
        options={{title: t('history')}}
        component={History}
      />
      <Tabs.Screen
        name="Upcoming"
        options={{title: t('upcoming')}}
        component={Scheduled}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
