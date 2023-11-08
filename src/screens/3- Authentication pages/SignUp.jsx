import React from 'react';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Input from '../../components/Input/Input';
import {View} from 'react-native';
import BigButton from '../../components/BigButton/BigButton';
const SignUp = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader title="Sign up free" />
      </View>

      <View style={{flex: 4}}>
        <Input
          lable="Or continue with"
          inputImg={require('../../assets/emailInput.png')}
          placeHolder="Enter e-mail address"
        />

        <Input
          lable="Or continue with"
          inputImg={require('../../assets/passwordInput.png')}
          placeHolder="Create a password"
        />

        <Input
          lable="Or continue with"
          inputImg={require('../../assets/passwordInput.png')}
          placeHolder="Repeat password"
        />
      </View>

      <View style={{flex: 0.5}}>
        <BigButton text="Continue" color="rgba(3, 115, 243, 1)" />
      </View>
    </View>
  );
};

export default SignUp;
