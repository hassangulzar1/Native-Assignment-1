import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Heading, Paragraph, LastText} from '../../../components/startText/Text';
import StartButton from '../../../components/startButtons/Button';

const Third = ({navigation}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/start3.png')} />
      <Heading title="High-end leisure projects to choose from" />
      <Paragraph
        Text="The world's first-class modern leisure 
and entertainment method"
      />
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={{marginTop: 30}}
        onPress={() => navigation.navigate('main')}>
        <StartButton
          pressed={isPressed}
          img={require('../../../assets/startBtn.png')}
        />
      </Pressable>
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
