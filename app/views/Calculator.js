import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { dec2Hex, dec2Bin } from '../../Converter';


export default class HomeScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Calculator!</Text>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
    },
  
    tableItem1: {
      flex: 1,
      fontSize: 18,
      height: 24,
    },
  
    tableHeaderItem: {
      fontWeight: 'bold',
      color: '#ffffff',
      flex: 1,
    },
  
    table: {
      flex: 1,
    },
  
    tableHeader: {
      flexDirection: 'row',
      fontWeight: 'bold',
      backgroundColor: 'rgba(50,50,50,1.0)',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
      paddingTop: 10,
    },
  
    tableRowOdd: {
      flexDirection: 'row',
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#ffffff',
    },
    tableRowEven: {
      flexDirection: 'row',
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#dddddd',
    },
    tableColorItem1: {
      flex: 1,
      fontSize: 18,
      height: 24,
    },
    tableColorItem2: {
      flex: 1,
      fontSize: 18,
      height: 24,
    },
    tableColorItem3: {
      flex: 2,
      fontSize: 18,
      height: 24,
    },
    tableColorItem4: {
      flex: 1.6,
      fontSize: 18,
      height: 24,
    },
    tableColorItem5: {
      flex: 1.0,
      fontSize: 18,
      height: 24,
    },
    tableColorHeaderItem1: {
      fontWeight: 'bold',
      color: '#ffffff',
      flex: 1,
    },
    tableColorHeaderItem2: {
      fontWeight: 'bold',
      color: '#ffffff',
      flex: 1,
    },
    tableColorHeaderItem3: {
      fontWeight: 'bold',
      color: '#ffffff',
      flex: 2,
    },
    tableColorHeaderItem4: {
      fontWeight: 'bold',
      color: '#ffffff',
      flex: 1.6,
    },
    tableColorHeaderItem5: {
      fontWeight: 'bold',
      color: '#ffffff',
      flex: 1.0,
    },
  })