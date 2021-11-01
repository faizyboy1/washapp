import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import Terms from '../screens/terms';
import Cars from '../screens/cars';
import TellFriend from '../screens/tell-friend';
import Records from '../stacks/tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
    headerTintColor: "white",
    headerStyle: {
        backgroundColor: '#14b8a6',
    },
    drawerActiveTintColor: "#14b8a6"
};

const DrawerNavigator = ({navigation}) => {
    return (
        <Drawer.Navigator screenOptions={screenOptionStyle}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Records" component={Records} />
            <Drawer.Screen name="Cars" component={Cars}
                           options={{
                               headerRight: () => (
                                   <TouchableOpacity onPress={() =>
                                       navigation.navigate('addCar')} style={{paddingRight: 10}}>
                                       <Icon name="plus" size={25} color="white" />
                                   </TouchableOpacity>
                               ),
                           }}
            />
            <Drawer.Screen name="Tell Friend" component={TellFriend} />
            <Drawer.Screen name="Terms and Conditions" component={Terms} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;