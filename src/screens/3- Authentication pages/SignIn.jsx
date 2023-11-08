import React from 'react';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Input from '../../components/Input/Input';
import {View, Image, Text, StyleSheet} from 'react-native';

const SignIn = () => {
  let image = require('../../assets/settingsLogo.png');
  let inputImg = require('../../assets/emailInput.png');
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader title="Sign In" img={image} />
      </View>

      <View style={{flex: 4}}>
        <Input inputImg={inputImg} placeHolder="Enter e-mail address" />

        <View style={styles.afterSignIn}>
          <Image source={require('../../assets/line.png')} />
          <Text style={{color: 'rgba(0, 0, 0, 1)'}}>Or Continus with</Text>
          <Image source={require('../../assets/line.png')} />
        </View>
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
