import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BigButton from '../BigButton/BigButton';
const Partner = props => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.leftArea}>
          <Image style={{width: 40, height: 40}} source={props.image} />

          <View style={{marginStart: 10}}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.descText}>{props.desc}</Text>
          </View>
        </View>
        {!props.forwardArrow && (
          <BigButton color="rgba(3, 115, 243, 1)" text="Edit profile" />
        )}
        {props.forwardArrow && (
          <Image source={require('../../assets/forwardArrow.png')} />
        )}
      </View>
      <Image
        style={styles.horizontalLine}
        source={require('../../assets/underline.png')}
      />
    </>
  );
};

export default Partner;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalLine: {
    width: 330,
    marginTop: 10,
  },
  titleText: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 16,
    lineHeight: 26.32,
  },
  descText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'rgba(168, 168, 168, 1)',
  },
});
