import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const StartButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Image source={props.img} />
    </TouchableOpacity>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 50,
    marginTop: 15,
    alignItems: 'center',
  },
});
