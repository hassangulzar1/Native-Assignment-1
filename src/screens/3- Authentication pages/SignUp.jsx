import React, {useState} from 'react';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Input from '../../components/Input/Input';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import BigButton from '../../components/BigButton/BigButton';
const SignUp = () => {
  const [radioChecked, setRadioChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const radioHandler = () => {
    setRadioChecked(!radioChecked);
    setShowError(false);
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader backArrow={true} title="Sign up free" />
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

        <View style={[styles.termsAgreeSection, {marginHorizontal: 15}]}>
          <Pressable onPress={radioHandler}>
            <View style={styles.radioBtn}>
              {radioChecked && <View style={styles.radioBtnChecked}></View>}
            </View>
          </Pressable>
          <Text style={styles.termsText} onPress={radioHandler}>
            I have read the
            <Text style={{...styles.termsText, color: '#0373F3'}}>
              Terms of Service
            </Text>
          </Text>
        </View>
      </View>

      <View style={{flex: 0.5}}>
        <BigButton text="Continue" color="rgba(3, 115, 243, 1)" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  termsAgreeSection: {
    marginTop: 20,
    marginHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  radioBtn: {
    borderWidth: 1,
    borderRadius: 50,
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioBtnChecked: {
    backgroundColor: '#0373F3',
    borderRadius: 50,
    width: 13,
    height: 13,
  },
  termsText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 15,
  },
});
