import {createAppContainer, createStackNavigator} from 'react-navigation';
import SingUpScreen from '.../Screens/SingUpScreen';
import LogingScreen from '.../Screens/LogingScreen';

const AuthNavigatior = createStackNavigator({
    SingUp : SingUpScreen,
    Loging : LogingScreen
},{
    initialRouteName: "SingUp"

});

const AppNavigator = createAppNavigator({
    Home: HomeScreen,
},{
    defaultNavigationOptions:({AppNavigator})
});

export default createAppContainer ({
    createSwtichNavigator({
        Auth: AuthNavigatior,
        App: AppNavigator,

        AuthLoading: AuthLoading,


    },
    {
        initialRouteName: AuthLoading,
    })

});

