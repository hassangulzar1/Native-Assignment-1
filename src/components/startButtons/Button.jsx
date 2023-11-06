import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';

const StartButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Image style={{height: 20, width: 25}} source={props.img} />
    </TouchableOpacity>
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
    marginTop: 30,
    alignItems: 'center',
  },
});
