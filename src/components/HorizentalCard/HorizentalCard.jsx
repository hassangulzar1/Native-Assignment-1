import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
const HorizentalCard = props => {
  return (
    <TouchableOpacity>
      <ImageBackground
        style={styles.backGroundStyle}
        resizeMode="cover"
        source={props.image}>
        <View style={styles.textView}>
          <View style={{marginBottom: 10, marginStart: 10}}>
            <Text style={styles.cardHeading}>{props.title}</Text>
            <Text style={styles.cardPrice}>{props.price}</Text>
          </View>
          <Text style={{marginEnd: 10, color: 'white'}}>
            {props.rating} <Image source={require('../../assets/star.png')} />
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HorizentalCard;

const styles = StyleSheet.create({
  cardHeading: {
    fontFamily: 'Andika-Regular',
    fontSize: 22,
    color: 'white',
    lineHeight: 33.45,
    textShadowColor: 'black',
    textShadowRadius: 30,
  },
  cardPrice: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 12,
    lineHeight: 18,
    textShadowRadius: 30,
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backGroundStyle: {
    height: 138,
    width: 230,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
