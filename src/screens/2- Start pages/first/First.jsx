import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Heading, Paragraph, LastText} from '../../../components/startText/Text';
import StartButton from '../../../components/startButtons/Button';
const First = ({navigation}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/start1.png')} />
      <Heading title="Make your own private travel plan" />
      <Paragraph Text="Formulate your strategy to receive wonderful gift packs" />
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={{marginTop: 30}}
        onPress={() => navigation.navigate('second')}>
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
