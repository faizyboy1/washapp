import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./src/stacks/stack";

function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

export default App;