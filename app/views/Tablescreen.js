import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { dec2HexShort, dec2BinShort } from '../modules/Converter';


export default class TableScreen extends React.Component {

  constructor() {
    super();

    this.notatedList = [];

    let counter = 0;
    while(counter < 256){
      this.notatedList.push( {key: counter.toString(10)} );
      counter ++;
    }
  

    // render item function, outside from class's `render()`
    this.renderItem = ({ item, index }) => (
      (index % 2)?
      <View style={styles.tableRowOdd}>
        <Text style={styles.tableItem}>{item.key}</Text>
        <Text style={styles.tableItem}>{dec2HexShort(item.key)}</Text>
        <Text style={styles.tableItem}>{dec2BinShort(item.key)}</Text>
      </View>
    :
      <View style={styles.tableRowEven}>
        <Text style={styles.tableItem}>{item.key}</Text>
        <Text style={styles.tableItem}>{dec2HexShort(item.key)}</Text>
        <Text style={styles.tableItem}>{dec2BinShort(item.key)}</Text>
      </View>
    );

  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>Conversion table 0-255</Text>
        </View>

        <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderItem}>DEC</Text>
            <Text style={styles.tableHeaderItem}>HEX</Text>
            <Text style={styles.tableHeaderItem}>BIN</Text>
        </View>

        <View style={styles.table}> 
          <FlatList
            data= {this.notatedList}
            renderItem={this.renderItem}
            initialNumToRender={50}
            maxToRenderPerBatch={10}
          />
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