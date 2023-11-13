import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Partner from '../../components/Partner/Partner';

const PartnerData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-6766',
    image: require('../../assets/alan.png'),
    title: 'Alanlove',
    desc: 'Travel Blogger',
  },
  {
    id: 'bd7acbea-4544-46c2-aed5-6766',
    image: require('../../assets/charlotte.png'),
    title: 'Charlotte',
    desc: 'Chief Travel Experiencer',
    forwardArrow: true,
  },
  {
    id: 'bd7acbea-4544-46c2-ae234d5-6766',
    image: require('../../assets/evangiline.png'),
    title: 'Evangeline',
    desc: 'Chief Travel Experiencer',
    forwardArrow: true,
  },
  {
    id: 'bd7acbea-4544-46c2-aed5-345',
    image: require('../../assets/geraldine.png'),
    title: 'Geraldine',
    desc: 'Private tour guide',
    forwardArrow: true,
  },
  {
    id: 'bd7acbea-4544-46c2-aed5-34543',
    image: require('../../assets/prudence.png'),
    title: 'Prudence',
    desc: 'Travel youtube master',
    forwardArrow: true,
  },
];

const Chart = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fafafa'}}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <AuthHeader title="Your Partner" />
      </View>
      <View style={{flex: 3, marginHorizontal: 15}}>
        <FlatList
          data={PartnerData}
          renderItem={({item}) => (
            <Partner
              desc={item.desc}
              title={item.title}
              image={item.image}
              forwardArrow={item.forwardArrow}
              keyExtractor={item => item.id}
            />
          )}
        />
      </View>

      <View style={styles.logoutBtn}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../assets/logout.png')}
        />
        <Text style={styles.logoutBtnText}>Log out</Text>
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  logoutBtn: {
    flex: 0.5,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutBtnText: {
    fontFamily: 'Poppins-Bold',
    color: 'rgba(3, 115, 243, 1)',
    lineHeight: 26.32,
    marginHorizontal: 8,
    marginTop: 2.5,
  },
});
