import {Component} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import PokemonList from '../pokemon/Pokemon';
import {pokemons} from '../pokemon/pokemonData';
import {StackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;
class HomeScreen extends Component<HomeScreenProps> {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <PokemonList pokemons={pokemons} navigation={navigation} />
      </>
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
});

export default HomeScreen;
