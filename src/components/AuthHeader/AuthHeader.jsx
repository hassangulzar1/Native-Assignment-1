import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const SignIn = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginTop: 20}}>
        <Image
          style={{height: 20, width: 20, marginTop: 20}}
          source={require('../../assets/backArrow.png')}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.Heading}>{props.title}</Text>
          <Image
            style={{height: 35, width: 35, marginTop: 20}}
            source={props.img}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Heading: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 45,
    letterSpacing: 0,
    color: 'rgba(31, 31, 31, 1)',
  },
});
