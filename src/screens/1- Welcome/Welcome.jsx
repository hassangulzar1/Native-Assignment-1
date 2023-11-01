import React from 'react';
import {View, Text, Image} from 'react-native';

const Welcome = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
          'linear-gradient( rgba(102,210,204,1),rgba(48,98,243,1))',
      }}>
      <Image source={require('../../assets/owl.png')} />
    </View>
  );
};

export default Welcome;
