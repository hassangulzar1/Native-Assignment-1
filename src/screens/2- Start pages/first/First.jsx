import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Heading, Paragraph, LastText} from '../../../components/startText/Text';
import StartButton from '../../../components/startButtons/Button';
const First = () => {
  const imagePath = require('../../../assets/startBtn.png');
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/start1.png')} />
      <Heading title="Make your own private travel plan" />
      <Paragraph Text="Formulate your strategy to receive wonderful gift packs" />
      <StartButton img={imagePath} />

      <View style={styles.containerEnd}>
        <LastText />
      </View>
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
  containerEnd: {
    position: 'absolute',
    bottom: 8,
  },
});
