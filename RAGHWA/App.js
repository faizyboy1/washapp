import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GuestStack from './src/navigation/stack/guest';
import WasherStack from './src/navigation/stack/washer';
import MainStack from './src/navigation/stack/main';
import './src/lang/index';
import MMKVStorage from 'react-native-mmkv-storage';
import {extendTheme} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import Home from './src/screens/home/index';
const MMKV = new MMKVStorage.Loader().initialize();
const token = MMKV.getString('token');

//@todo using useContext instead of fetching token/user form database

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{renderStack()}</NativeBaseProvider>
    </NavigationContainer>
  );
}

const renderStack = () => {
  // return <Home />;
  const isWasher = false; //@todo needs to be fetch from storage/api
  if (!token) {
    return <GuestStack />;
  }
  return isWasher ? <WasherStack /> : <MainStack />;
};

export default App;

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {},
      defaultProps: {},
      variants: {
        textRight: () => {
          return {
            textAlign: 'right',
          };
        },
        sizes: {},
      },
    },
  },
});
