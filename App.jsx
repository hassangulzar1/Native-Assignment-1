import React, {useEffect} from 'react';
import First from './src/screens/2- Start pages/first/First';
import Second from './src/screens/2- Start pages/second/Second';
import Third from './src/screens/2- Start pages/third/Third';
import SplashScreen from 'react-native-splash-screen';
import SignIn from './src/screens/3- Authentication pages/SignIn';
import SettingsCenter from './src/screens/3- Authentication pages/SettingsCenter';
import SignUp from './src/screens/3- Authentication pages/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainRoutes from './src/screens/MainPageRoutes/MainRoutes';
const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="first">
        <Stack.Screen
          options={{headerShown: false}}
          name="first"
          component={First}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="second"
          component={Second}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="third"
          component={Third}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="main"
          component={MainRoutes}
        />
      </Stack.Navigator>

      {/* <SignIn /> */}
      {/* <SettingsCenter /> */}
      {/* <SignUp /> */}
    </NavigationContainer>
  );
};

export default App;
