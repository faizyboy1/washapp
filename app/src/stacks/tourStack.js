import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoarding from "../screens/tour";
import StackNav from "./stack";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerTintColor: "Black",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
            <Stack.Screen name="navigationStack" component={StackNav} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default MainStackNavigator;