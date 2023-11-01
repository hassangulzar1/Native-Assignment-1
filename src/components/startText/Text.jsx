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
      <Text style={styles.heading}>{props.Text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    lineHeight: 42,
  },
});
