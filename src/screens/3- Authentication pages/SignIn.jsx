import React from 'react';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Input from '../../components/Input/Input';
import {View, Image, Text, StyleSheet} from 'react-native';
import BigButton from '../../components/BigButton/BigButton';

const SignIn = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader
          title="Sign In"
          img={require('../../assets/settingsLogo.png')}
        />
      </View>

      <View style={{flex: 4}}>
        <Input
          inputImg={require('../../assets/emailInput.png')}
          placeHolder="Enter e-mail address"
        />

        <View style={styles.afterSignIn}>
          <Image source={require('../../assets/line.png')} />
          <Text style={{color: 'rgba(0, 0, 0, 1)'}}>Or Continus with</Text>
          <Image source={require('../../assets/line.png')} />
        </View>

        <View style={{marginTop: 15}}>
          <BigButton
            buttonImg={require('../../assets/appleButtonImg.png')}
            text="Continue with Apple"
            color="rgba(31, 31, 31, 1)"
          />
          <BigButton
            buttonImg={require('../../assets/fbButtonImg.png')}
            text="Continus with Facebook"
            color="rgba(59, 88, 150, 1)"
          />
        </View>
      </View>
      <View style={{flex: 0.5}}>
        <BigButton text="Continue" color="rgba(3, 115, 243, 1)" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  afterSignIn: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
