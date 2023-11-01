import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Heading, Paragraph} from '../../../components/startText/Text';
import StartButton from '../../../components/startButtons/Button';

const Second = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/start2.png')} />
      <Heading title="Customize your High-end travel" />
      <Paragraph Text="Countless high-end entertainment facilities" />
      <StartButton />
    </View>
  );
};

export default Second;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
