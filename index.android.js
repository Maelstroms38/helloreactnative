//Import
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';
//Create Component
const App = () => {
  return (
  <View style={{flex:1}}>
    <Header headerText={'Albums'}></Header>
    <AlbumList />
  </View>
  );
};
//Render
AppRegistry.registerComponent('hello', () => App);
