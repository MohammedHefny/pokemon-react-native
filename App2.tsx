// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {Component} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import PokemonScreen from './components/screens/PokemonScreen';
import DashBoard from './components/screens/dashBoardScreen';
import Games from './components/games/Games';
import GameDetails from './components/games/GameDetails';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoListClass from './components/ToDoList/ToDoListClassFunc';
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
export type StackParamList = {
  Home: any;
  Pokemon: any;
};
export type GamesParamList = {
  Games: any;
  GamesDetails: any;
};

class App extends Component {
  render(): React.ReactNode {
    return (
      <>
        {/* <NavigationContainer> */}
        {/* <Drawer.Navigator> */}
        {/* <Drawer.Screen name="Games" component={Games} /> */}
        {/* <Drawer.Screen name="GameDetails" component={GameDetails} /> */}
        {/* </Drawer.Navigator> */}
        {/* </NavigationContainer> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default App;
