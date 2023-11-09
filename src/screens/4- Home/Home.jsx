import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Input from '../../components/Input/Input';
import StartButton from '../../components/startButtons/Button';
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader para="Find your next trip" title="Nordic scenery" />
      </View>

      <View
        style={{
          flex: 4,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '70%'}}>
          <Input
            inputImg={require('../../assets/search.png')}
            placeHolder="Search..."
          />
        </View>
        <StartButton img={require('../../assets/filter.png')} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
