import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ColorScreen from './app/views/Colors';
import HomeScreen from './app/views/Calculator';
import TableScreen from './app/views/Tablescreen';




const TabNavigator = createBottomTabNavigator({
  'Calculator': HomeScreen,
  'Conversion Table': TableScreen,
  'Colors': ColorScreen
});

export default createAppContainer(TabNavigator);


