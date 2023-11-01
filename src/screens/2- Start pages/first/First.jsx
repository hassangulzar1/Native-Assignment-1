import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Heading, Paragraph} from '../../../components/startText/Text';
import StartButton from '../../../components/startButtons/Button';
const First = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/start1.png')} />
      <Heading title="Make your own private travel plan" />
      <Paragraph Text="Formulate your strategy to receive wonderful gift packs" />

      <StartButton />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
