import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Constants from 'expo-constants';



// You can import from local files
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/jokeScreen';
import HoroScopeScreen from './screens/HoroScopeScreen';
import WeatherScreen from './screens/WeatherScreen';
import NewsScreen from './screens/NewsScreen';

export default class App extends React.Component {
  constructor(){
  super()
  this.state={
    like:0,
    dislike:0
  }
}
  render() {
    return (
      <View>
        <AppContainer/>
        <Text>{this.state.like}</Text>
        <Text>{this.state.dislike}</Text>
        likecount=()=>{
          this.setState({like:this.state.like+1})
        }

         dislikecount=()=>{
          this.setState({like:this.state.dislike+1})
        }
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  HoroScopeScreen: HoroScopeScreen,
  WeatherScreen: WeatherScreen,
  NewsScreen: NewsScreen,
});

const AppContainer = createAppContainer(AppNavigator);
