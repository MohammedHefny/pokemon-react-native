import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GamesParamList} from '../../App';

type GamesScreenProps = NativeStackScreenProps<GamesParamList, 'GamesDetails'>;

class GameDetails extends Component<GamesScreenProps> {
  render() {
    const {name, imageUrl, platform, releaseYear, rating, genre} =
      this.props?.route?.params?.gameData; // Updated to gameData
    return (
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>platform: {platform}</Text>
        <Text style={styles.text}>releaseYear: {releaseYear}</Text>
        <Text style={styles.text}>rating: {rating}</Text>
        <Text style={styles.text}>genre: {genre}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    // height: 100,
    marginBottom: 16,
  },
});
export default GameDetails;
