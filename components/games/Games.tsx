import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {Component} from 'react';
import {gamesData} from '../games/gamesData';
import {GameI} from '../../interfaces/gameInterface';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GamesParamList} from '../../App';

type GamesScreenProps = NativeStackScreenProps<GamesParamList, 'Games'>;
class Games extends Component<GamesScreenProps> {
  renderedGames = ({item}: {item: GameI}) => (
    <View style={styles.item}>
      <Pressable
        onPress={() =>
          this.props.navigation.navigate('GamesDetails', {gameData: item})
        }>
        <Image style={styles.image} source={item.imageUrl} />
        <Text style={styles.title}>{item.name}</Text>
      </Pressable>
    </View>
  );
  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <FlatList
            data={gamesData}
            renderItem={this.renderedGames}
            keyExtractor={item => item.id.toString()}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Games;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  image: {
    width: '100%',
  },
});
