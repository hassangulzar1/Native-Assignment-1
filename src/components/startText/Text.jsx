import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
export const Heading = props => {
  return (
    <View>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  );
};

export const Paragraph = props => {
  return (
    <View>
      <Text style={styles.text}>{props.Text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: 20,
    paddingHorizontal: 20,
    fontWeight: '600',
    color: 'black',
    lineHeight: 42,
  },
  text: {
    marginTop: 10,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 27,
    lineHeight: 27,
    color: 'rgba(180, 180, 180, 1)',
  },
});
