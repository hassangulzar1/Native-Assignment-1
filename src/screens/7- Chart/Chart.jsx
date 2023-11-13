import React from 'react';
import {View} from 'react-native';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Partner from '../../components/Partner/Partner';
const Chart = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fafafa'}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader title="Your Partner" />
      </View>
      <View style={{flex: 3, marginHorizontal: 15}}>
        <Partner />
      </View>
    </View>
  );
};

export default Chart;
