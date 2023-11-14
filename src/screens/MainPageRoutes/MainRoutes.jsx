import React from 'react';
import Home from '../4- Home/Home';
import Wallet from '../5- Wallet/Wallet';
import Guide from '../6- Guide/Guide';
import Chart from '../7- Chart/Chart';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBarIcon from '../../components/TabIcons/CustomTabBarIcon';
const Tab = createBottomTabNavigator();
const MainRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Regular',
        },
        tabBarStyle: {
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <CustomTabBarIcon
              focused={focused}
              imageSource={require('../../assets/homeIcon.png')}
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
              imageSource={require('../../assets/walletIcon.png')}
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
              imageSource={require('../../assets/guideIcon.png')}
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
              imageSource={require('../../assets/chartIcon.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainRoutes;
