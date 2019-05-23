import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { dec2Hex, dec2Bin } from '../../Converter';


export default class TableScreen extends React.Component {

  constructor() {
    super();

    this.notatedList = [];

    let counter = 0;
    while(counter < 256){
      this.notatedList.push( {key: counter.toString(10)} );
      counter ++;
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderItem}>DEC</Text>
            <Text style={styles.tableHeaderItem}>HEX</Text>
            <Text style={styles.tableHeaderItem}>BIN</Text>
        </View>

        <View style={styles.table}> 
          <FlatList
            data= {this.notatedList}
            renderItem={({item,index}) =>
              (index % 2)?
                <View style={styles.tableRowOdd}>
                  <Text style={styles.tableItem1}>{item.key}</Text>
                  <Text style={styles.tableItem1}>{dec2Hex(item.key)}</Text>
                  <Text style={styles.tableItem1}>{dec2Bin(item.key)}</Text>
                </View>
              :
                <View style={styles.tableRowEven}>
                  <Text style={styles.tableItem1}>{item.key}</Text>
                  <Text style={styles.tableItem1}>{dec2Hex(item.key)}</Text>
                  <Text style={styles.tableItem1}>{dec2Bin(item.key)}</Text>
                </View>
            }
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
    backgroundColor: 'rgba(250,50,50,1.0)',
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
})