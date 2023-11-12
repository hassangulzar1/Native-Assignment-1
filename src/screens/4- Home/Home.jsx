import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Input from '../../components/Input/Input';
import StartButton from '../../components/startButtons/Button';
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader para="Find your next trip" title="Nordic scenery" />
      </View>

      <View style={styles.filterView}>
        <View style={{width: '75%'}}>
          <Input
            inputImg={require('../../assets/search.png')}
            placeHolder="Search..."
          />
        </View>
        <View style={{marginEnd: 10}}>
          <StartButton img={require('../../assets/filter.png')} />
        </View>
      </View>

      <View style={{flex: 2, marginHorizontal: 15}}>
        <Text style={styles.cardHeading}>Popular Locations</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'blue'}}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  filterView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 27,
    color: 'black',
  },
});
