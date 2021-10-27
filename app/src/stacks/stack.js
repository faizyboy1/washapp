import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Terms from "../screens/terms";
import Login from "../screens/login";
import Register from "../screens/register";
import Drawer from "./drawer";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerTintColor: "Black",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Terms and Conditions" component={Terms} />
            <Stack.Screen name="Drawer" component={Drawer} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default MainStackNavigator;