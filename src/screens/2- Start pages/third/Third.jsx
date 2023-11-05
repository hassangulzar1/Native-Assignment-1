import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Heading, Paragraph, LastText} from '../../../components/startText/Text';
import StartButton from '../../../components/startButtons/Button';

const Third = () => {
  let imagePath = require('../../../assets/startBtn.png');
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/start3.png')} />
      <Heading title="High-end leisure projects to choose from" />
      <Paragraph
        Text="The world's first-class modern leisure 
and entertainment method"
      />
      <StartButton img={imagePath} />
      <View style={styles.containerEnd}>
        <LastText />
      </View>
    </View>
  );
};

export default Third;
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