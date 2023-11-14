import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const StartButton = props => {
  return (
    <View
      style={[styles.buttonContainer, props.pressed && styles.buttonPressed]}>
      <Image style={{height: 20, width: 20}} source={props.img} />
    </View>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 115, 243, 1)',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: 'gray',
  },
});
