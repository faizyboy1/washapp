import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import Terms from '../screens/terms';
import Login from '../stacks/stack';
import TellFriend from '../screens/tell-friend';
import Records from '../stacks/tabs';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Records" component={Records} />
            <Drawer.Screen name="Tell Friend" component={TellFriend} />
            <Drawer.Screen name="Terms and Conditions" component={Terms} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;