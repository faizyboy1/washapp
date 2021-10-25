import { createStackNavigator } from 'react-navigation-stack';
import terms from '../screens/terms';

const screens = {
    About: {
        screen: terms,
        navigationOptions: {
            title: 'Terms and Conditions'
        },
    },
};

const termsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default termsStack;