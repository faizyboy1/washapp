import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TourNavigator from "./src/stacks/tourStack";
import './src/lang/index';

function App() {
    return (
        <NavigationContainer>
            <TourNavigator />
        </NavigationContainer>
    );
}

export default App;