import React from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
const Input = props => {
  return (
    <SafeAreaView style={{marginHorizontal: 15, marginVertical: 8}}>
      {props.lable && <Text style={styles.placeHolder}>{props.lable}</Text>}

      <View style={styles.InputView}>
        <Image style={{marginLeft: 10}} source={props.inputImg} />
        <TextInput
          style={[styles.input, {marginLeft: 3}]}
          placeholder={props.placeHolder}
          inputMode="text"
          value={props.name}
          readOnly={props.readOnly}
        />
      </View>
    </SafeAreaView>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputView: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: 'rgba(233, 233, 233, 1)',
    borderWidth: 1,
  },
  placeHolder: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: 'rgba(173, 173, 173, 1)',
  },
  input: {
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: 'rgba(39, 39, 39, 1)',
  },
});
