import React from 'react';
import {View} from 'react-native';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Input from '../../components/Input/Input';
import BigButton from '../../components/BigButton/BigButton';

const SettingsCenter = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader
          title="Sign In"
          backArrow={true}
          img={require('../../assets/settingsLogo.png')}
        />
      </View>

      <View style={{flex: 4}}>
        <Input
          lable="E-mail address"
          inputImg={require('../../assets/emailInput.png')}
          placeHolder="Enter e-mail address"
        />

        <Input
          lable="Password"
          inputImg={require('../../assets/emailInput.png')}
          placeHolder="Enter Passwrod"
        />
        <Input
          lable="Authenticate"
          inputImg={require('../../assets/userInput.png')}
          readOnly={true}
          name="Travel Blogger"
          placeHolder="Enter Passwrod"
        />
      </View>
      <View style={{flex: 0.5}}>
        <BigButton text="Save Settings" color="rgba(3, 115, 243, 1)" />
      </View>
    </View>
  );
};

export default SettingsCenter;
