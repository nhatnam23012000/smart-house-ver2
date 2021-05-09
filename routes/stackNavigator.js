import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Homepage from '../screens/homepage';
import Register from '../screens/register';
import Dashboard from '../screens/dashboard';

const screens = {
    Login: {
        screen: Homepage
    },
    Register: {
        screen: Register
    },
    Dashboard: {
        screen: Dashboard
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
