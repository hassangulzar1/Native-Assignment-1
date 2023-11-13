import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BigButton from '../BigButton/BigButton';
const Partner = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.leftArea}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../../assets/alan.png')}
          />

          <View style={{marginStart: 10}}>
            <Text style={styles.titleText}>Alanlove</Text>
            <Text style={styles.descText}>Travel Blogger</Text>
          </View>
        </View>
        <BigButton color="rgba(3, 115, 243, 1)" text="Edit profile" />
      </View>
      <Image source={require('../../assets/underline.png')} />
      {/* <View style={styles.horizontalLine} /> */}
    </>
  );
};

export default Partner;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftArea: {
    display: 'flex',
    flexDirection: 'row',
  },
  horizontalLine: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
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
