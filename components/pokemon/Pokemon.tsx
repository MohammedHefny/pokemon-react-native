import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  abilities: string[];
  image: ImageSourcePropType;
}

interface PokemonListProps {
  pokemons: Pokemon[];
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
}

class PokemonList extends Component<PokemonListProps> {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Pokémon List',
    });
  }

  renderItem = ({item}: {item: Pokemon}) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('Pokemon', {pokemonData: item})
      }
      style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.pokemons}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: 'tomato',
    textAlign: 'center',
  },
});

export default PokemonList;
