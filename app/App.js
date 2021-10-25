import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Terms  from './src/screens/terms';
import Login from './src/screens/login';
import Register from './src/screens/register';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Home Screen </Text>
        </View>
    );
}

function TermsScreen() {
    return (
        <Terms />
    );
}

function LoginScreen() {
    return (
        <Login />
    );
}

function RegisterScreen() {
    return (
        <Register />
    );
}

const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Log-in" component={LoginScreen} />
                <Drawer.Screen name="Register" component={RegisterScreen} />
                <Drawer.Screen name="Terms & Conditions" component={TermsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;