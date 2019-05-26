import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { dec2HexShort, dec2BinShort } from '../modules/Converter';


export default class TableScreen extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>About</Text>
        </View>

        <View >
          <Text >Cheesy Willy</Text>
        </View>

        
      </View>
    );
  }

  
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
  },

  tableItem: {
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

  header: {
    backgroundColor: 'rgba(50,50,50,1.0)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,

  },

  headerText: {
    color: 'white',
    fontSize: 24,

  },

  tableHeader: {
    flexDirection: 'row',
    fontWeight: 'bold',
    backgroundColor: 'tomato',
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
    paddingTop: 4,
    paddingBottom: 4,
  },
  tableRowEven: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#dddddd',
    paddingTop: 4,
    paddingBottom: 4,
  },
})