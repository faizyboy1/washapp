import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TourNavigator from "./src/stacks/tour-stack";
import './src/lang/index';

function App() {
  return (
      <NavigationContainer>
        <TourNavigator />
      </NavigationContainer>
  );
}

export default App;
