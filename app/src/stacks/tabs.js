import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import History from "../screens/history";
import Scheduled from "../screens/scheduled";

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
    tabBarIconStyle: { display: "none" },
    tabBarLabelStyle: {
        fontWeight: "700",
        fontSize: 14,
        position: 'absolute',
        top: 20,
        color: "#0d9488"
    },
    headerShown: false,
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptionStyle}>
            <Tab.Screen name="History" component={History}/>
            <Tab.Screen name="Scheduled" component={Scheduled} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;