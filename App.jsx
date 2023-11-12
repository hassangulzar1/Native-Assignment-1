import React, {useEffect} from 'react';
import First from './src/screens/2- Start pages/first/First';
import Second from './src/screens/2- Start pages/second/Second';
import Third from './src/screens/2- Start pages/third/Third';
import SplashScreen from 'react-native-splash-screen';
import SignIn from './src/screens/3- Authentication pages/SignIn';
import SettingsCenter from './src/screens/3- Authentication pages/SettingsCenter';
import SignUp from './src/screens/3- Authentication pages/SignUp';
import Home from './src/screens/4- Home/Home';
import Wallet from './src/screens/5- Wallet/Wallet';
import Guide from './src/screens/6- Guide/Guide';
import Chart from './src/screens/7- Chart/Chart';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBarIcon from './src/components/TabIcons/CustomTabBarIcon';

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
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                imageSource={require('./src/assets/homeIcon.png')}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                imageSource={require('./src/assets/walletIcon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Guide"
          component={Guide}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                imageSource={require('./src/assets/guideIcon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chart"
          component={Chart}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                imageSource={require('./src/assets/chartIcon.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
