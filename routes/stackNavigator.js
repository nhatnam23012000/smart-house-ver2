import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Homepage from '../screens/homepage';
import Register from '../screens/register';

const screens = {
    Login: {
        screen: Homepage
    },
    Register: {
        screen: Register
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
