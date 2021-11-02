import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import Terms from '../screens/terms';
import Cars from '../screens/cars';
import TellFriend from '../screens/tell-friend';
import Records from '../stacks/tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { useTranslation } from 'react-i18next';

export default function DrawerNavigator ({navigation}) {
    const Drawer = createDrawerNavigator();

    const { t, i18n } = useTranslation();

    const screenOptionStyle = {
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: '#14b8a6',
        },
        drawerActiveTintColor: "#14b8a6",
    };

    const HomeOptions = {
        drawerLabel: "Home",
        drawerIcon: (drawerTintColor) => <Icon name="home" size={20} color="#14b8a6"/>
    };

    const RecordsOptions = {
        drawerLabel: "Records",
        drawerIcon: () => <Icon name="file-alt" size={25} color="grey"/>
    };

    const CarsOptions = {
        drawerLabel: "Saved Cars",
        drawerIcon: () => <Icon name="car" size={20} color="grey"/>,
        headerRight: () => (
            <TouchableOpacity onPress={() =>
                navigation.navigate('addCar')} style={{paddingRight: 12}}>
                <Icon name="plus" size={20} color="white" />
            </TouchableOpacity>
        )
    };

    const TellFriendOptions = {
        drawerLabel: "Share With Friends",
        drawerIcon: () => <Icon name="share" size={20} color="grey"/>
    };

    const TermsOptions = {
        drawerLabel: "Terms & Conditions",
        drawerIcon: () => <Icon name="file-contract" size={25} color="grey"/>,
    };

    return (
        <Drawer.Navigator screenOptions={screenOptionStyle}>
            <Drawer.Screen name="Home" component={Home} options={HomeOptions}/>
            <Drawer.Screen name="Records" component={Records} options={RecordsOptions}/>
            <Drawer.Screen name="Cars" component={Cars} options={CarsOptions}/>
            <Drawer.Screen name="TellFriend" component={TellFriend} options={TellFriendOptions}/>
            <Drawer.Screen name="TermsAndConditions" component={Terms} options={TermsOptions}/>
        </Drawer.Navigator>
    );
};

