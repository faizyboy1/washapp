import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import i18n from '../lang/index';

import History from '../screens/records-history';
import Scheduled from '../screens/records-upcoming';

const Tabs = createMaterialTopTabNavigator();

const TabNavigator = () => {
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
                options={{title: i18n.t('history')}}
                component={History}
            />
            <Tabs.Screen
                name="Upcoming"
                options={{title: i18n.t('upcoming')}}
                component={Scheduled}
            />
        </Tabs.Navigator>
    );
};

export default TabNavigator;
