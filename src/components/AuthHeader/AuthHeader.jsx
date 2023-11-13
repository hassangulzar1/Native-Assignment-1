import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const SignIn = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginTop: 20}}>
        {props.backArrow && (
          <Image
            style={{height: 20, width: 20, marginTop: 20}}
            source={require('../../assets/backArrow.png')}
          />
        )}

        <View style={styles.detailDiv}>
          <View>
            {props.para && <Text style={styles.para}>{props.para}</Text>}

            <Text style={styles.Heading}>{props.title}</Text>
          </View>
          {props.img && (
            <Image
              style={{height: 30, width: 30, marginTop: 20}}
              source={props.img}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    lineHeight: 45,
    letterSpacing: 0,
    color: 'rgba(31, 31, 31, 1)',
  },
  para: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    lineHeight: 24,
    color: 'background: rgba(129, 129, 129, 1)',
  },
  detailDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
});
