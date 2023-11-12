import React from 'react';
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Input from '../../components/Input/Input';
import StartButton from '../../components/startButtons/Button';
import HorizentalCard from '../../components/HorizentalCard/HorizentalCard';

const HorizontalCardData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../../assets/swizerland.png'),
    title: 'Switzerland',
    price: 'from $699',
    rating: '4.9',
  },
];
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
        <SafeAreaView>
          <FlatList
            data={HorizontalCardData}
            horizontal
            renderItem={({item}) => (
              <HorizentalCard
                image={item.image}
                rating={item.rating}
                price={item.price}
                title={item.title}
                keyExtractor={item => item.id}
              />
            )}
          />
        </SafeAreaView>
        <HorizentalCard />
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
