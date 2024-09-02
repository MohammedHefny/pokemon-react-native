import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from '../../App';

type PokemonScreenRouteProp = RouteProp<StackParamList, 'Pokemon'>;

interface PokemonScreenProps {
  route: PokemonScreenRouteProp;
}

const PokemonScreen: React.FC<PokemonScreenProps> = ({route}) => {
  const {name, type, abilities, image} = route.params!.pokemonData;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>Type: {type}</Text>
      <Text style={styles.text}>Abilities: {abilities.join(', ')}</Text>
    </View>
  );
};

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
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

export default PokemonScreen;
