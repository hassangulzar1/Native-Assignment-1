import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
const VerticleCard = props => {
  return (
    <TouchableOpacity style={{margin: 10}}>
      <ImageBackground style={styles.backGroundStyle} source={props.image}>
        <View style={{marginBottom: 10}}>
          <Text style={styles.cardHeading}>{props.title}</Text>
          <Text style={styles.totalLocations}>{props.locations}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default VerticleCard;

const styles = StyleSheet.create({
  cardHeading: {
    textAlign: 'center',
    fontFamily: 'Andika-Regular',
    fontSize: 18,
    color: 'white',
    lineHeight: 29,
    textShadowColor: 'black',
    textShadowRadius: 30,
  },
  totalLocations: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 12,
    lineHeight: 18,
    textShadowRadius: 30,
  },
  backGroundStyle: {
    resizeMode: 'contain',
    height: 200,
    width: 142,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
