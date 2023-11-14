import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Heading, Paragraph, LastText} from '../../../components/startText/Text';
import StartButton from '../../../components/startButtons/Button';

const Second = ({navigation}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/start2.png')} />
      <Heading title="Customize your High-end travel" />
      <Paragraph Text="Countless high-end entertainment facilities" />
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={{marginTop: 30}}
        onPress={() => navigation.navigate('third')}>
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
