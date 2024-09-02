// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {Component} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import PokemonScreen from './components/screens/PokemonScreen';
import DashBoard from './components/screens/dashBoardScreen';
import Games from './components/games/Games';
import GameDetails from './components/games/GameDetails';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoListClass from './components/ToDoList/ToDoListClassFunc';
const Stack = createNativeStackNavigator();
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
  componentDidMount() {
    console.log('heelo ');
  }
  render(): React.ReactNode {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ToDoListClass"
            screenOptions={{
              headerStyle: {backgroundColor: 'tomato'},
              headerTintColor: 'cyan',
              headerTitleStyle: {fontWeight: 'bold'},
              headerRight: () => (
                <Pressable onPress={() => Alert.alert('Menu Button Pressed')}>
                  <Text>Menu</Text>
                </Pressable>
              ),
              // headerLeft: () => (
              //   <Pressable onPress={() => Alert.alert('Menu Button Pressed')}>
              //     <Text>Left</Text>
              //   </Pressable>
              // ),
              contentStyle: {backgroundColor: '#e8e4f3'},
            }}>
            {/* if styles Are in Stack.Navigator then it will apply to all screen */}
            <Stack.Screen name="ToDoListClass" component={ToDoListClass} />
            <Stack.Screen name="ToDoList" component={ToDoList} />
            <Stack.Screen name="Games" component={Games} />
            <Stack.Screen name="GamesDetails" component={GameDetails} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Hello This Is Home Page',
              }}
            />
            <Stack.Screen
              name="Pokemon"
              component={PokemonScreen}
              // options={({route}) => ({
              //   title: route.params?['title'],
              // })}
              // options={{
              //   title: 'Hello MY Nigga',
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
