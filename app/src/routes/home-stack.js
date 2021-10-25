import { createStackNavigator } from 'react-navigation-stack';
import home from '../screens/home';

const screens = {
    Home: {
        screen: home,
        navigationOptions: {
            title: 'GameZone',
        }
    },
};

// home stack navigator screens
const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default homeStack;