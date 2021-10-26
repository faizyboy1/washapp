import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import Terms from "../screens/terms";
import Login from "../screens/login";
import Register from "../screens/register";

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
    headerStyle: {
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const stack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default stack;