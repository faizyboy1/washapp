import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import homeStack from './home-stack';
import termsStack from './terms-stack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: homeStack,
    },
    About: {
        screen: termsStack,
    },
});

export default createAppContainer(RootDrawerNavigator);