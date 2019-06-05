import React from 'react';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './app/views/Calculator';
import TableScreen from './app/views/Tablescreen';
import ColorScreen from './app/views/Colors';
import AboutScreen from './app/views/About';

const TabNavigator = createBottomTabNavigator(
  {
  
  'Converter': HomeScreen,
  'Conversion Table': TableScreen,
  'Colors': ColorScreen,
  'About': AboutScreen,
  
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;

        if (routeName === 'Converter') iconName = `calculator`;
        if (routeName === 'Conversion Table') iconName = `table`;
        if (routeName === 'Colors') iconName = `tint`;
        if (routeName === 'About') iconName = `question`;
       
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);


