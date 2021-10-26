import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Stack from "../stacks/stack";
import Home from "../screens/home";
import Terms from '../screens/terms';
import Login from '../screens/login';
import Register from '../screens/register';
import TellFriend from '../screens/tell-friend';
import Records from '../screens/records';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator ini>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Records" component={Records} />
            <Drawer.Screen name="Tell Friend" component={TellFriend} />
            <Drawer.Screen name="Terms and Conditions" component={Terms} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;