import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import History from "../screens/history";
import Scheduled from "../screens/scheduled";

const Tabs = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return (
        <Tabs.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: '#fff' },
            tabBarInactiveTintColor: "grey",
            tabBarActiveTintColor: "#0f766e",
            tabBarIndicatorStyle: {
                backgroundColor: "#14b8a6"
            }
        }}>
            <Tabs.Screen name="History" component={History}/>
            <Tabs.Screen name="Upcoming" component={Scheduled} />
        </Tabs.Navigator>
    );
};

export default TabNavigator;