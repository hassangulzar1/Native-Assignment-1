import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Heading, Paragraph, LastText} from '../../../components/startText/Text';
import StartButton from '../../../components/startButtons/Button';

const Second = () => {
  const imagePath = require('../../../assets/startBtn.png');
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/start2.png')} />
      <Heading title="Customize your High-end travel" />
      <Paragraph Text="Countless high-end entertainment facilities" />
      <StartButton img={imagePath} />

      <View style={styles.containerEnd}>
        <LastText />
      </View>
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
  containerEnd: {
    position: 'absolute',
    bottom: 8,
  },
});
