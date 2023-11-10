import React, {useEffect} from 'react';
import First from './src/screens/2- Start pages/first/First';
import Second from './src/screens/2- Start pages/second/Second';
import Third from './src/screens/2- Start pages/third/Third';
import SplashScreen from 'react-native-splash-screen';
import SignIn from './src/screens/3- Authentication pages/SignIn';
import SettingsCenter from './src/screens/3- Authentication pages/SettingsCenter';
import SignUp from './src/screens/3- Authentication pages/SignUp';
import Home from './src/screens/4- Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {/* <First /> */}
      {/* <Second /> */}
      {/* <Third /> */}
      {/* <SignIn /> */}
      {/* <SettingsCenter /> */}
      {/* <SignUp /> */}
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={SignIn} />
      </Tab.Navigator>

      {/* <Home /> */}
    </NavigationContainer>
  );
};

export default App;
