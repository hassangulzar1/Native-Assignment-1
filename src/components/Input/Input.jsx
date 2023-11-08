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
    <SafeAreaView>
      {props.lable && <Text style={styles.placeHolder}>{props.lable}</Text>}

      <View style={styles.InputView}>
        <Image style={{marginLeft: 10}} source={props.inputImg} />
        <TextInput
          style={[styles.placeHolder, {marginLeft: 3}]}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder={props.placeHolder}
          inputMode="text"
        />
      </View>
    </SafeAreaView>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputView: {
    marginHorizontal: 15,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: 'rgba(233, 233, 233, 1)',
    borderWidth: 1,
  },
  placeHolder: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: 'rgba(173, 173, 173, 1)',
  },
});
