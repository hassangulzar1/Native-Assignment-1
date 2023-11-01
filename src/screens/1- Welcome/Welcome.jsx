import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/owl.png')} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(48, 98, 243, 1)',
  },
});
