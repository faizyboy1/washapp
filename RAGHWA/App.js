import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/navigation/stack';
import {customTheme} from './src/assets/style/theme';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {LogBox} from 'react-native';
import {AppProvider} from './src/utils/AppContext';

function App() {
  LogBox.ignoreAllLogs();

  return (
    <AppProvider>
      <NavigationContainer>
        <NativeBaseProvider colorModeManager={'light'} theme={customTheme}>
          <Stack />
        </NativeBaseProvider>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
