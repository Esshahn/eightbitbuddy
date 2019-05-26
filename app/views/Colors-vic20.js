import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { dec2HexShort } from '../modules/Converter';

export default class ColorScreen extends React.Component {

    constructor() {
      super();
  
      this.notatedList = [
        {key:'0',rgb:'#000000',name:'black',color:{backgroundColor: '#000000'}},
        {key:'1',rgb:'#ffffff',name:'white',color:{backgroundColor: '#ffffff'}},
        {key:'2',rgb:'#880000',name:'red',color:{backgroundColor: '#880000'}},
        {key:'3',rgb:'#AAFFEE',name:'cyan',color:{backgroundColor: '#AAFFEE'}},
        {key:'4',rgb:'#CC44CC',name:'purple',color:{backgroundColor: '#CC44CC'}},
        {key:'5',rgb:'#00CC55',name:'green',color:{backgroundColor: '#00CC55'}},
        {key:'6',rgb:'#0000AA',name:'blue',color:{backgroundColor: '#0000AA'}},
        {key:'7',rgb:'#EEEE77',name:'yellow',color:{backgroundColor: '#EEEE77'}},
        {key:'8',rgb:'#DD8855',name:'orange',color:{backgroundColor: '#DD8855'}},
        {key:'9',rgb:'#664400',name:'brown',color:{backgroundColor: '#664400'}},
        {key:'10',rgb:'#FF7777',name:'light red',color:{backgroundColor: '#FF7777'}},
        {key:'11',rgb:'#333333',name:'dark gray',color:{backgroundColor: '#333333'}},
        {key:'12',rgb:'#777777',name:'medium gray',color:{backgroundColor: '#777777'}},
        {key:'13',rgb:'#AAFF66',name:'light green',color:{backgroundColor: '#AAFF66'}},
        {key:'14',rgb:'#0088FF',name:'light blue',color:{backgroundColor: '#0088FF'}},
        {key:'15',rgb:'#BBBBBB',name:'light gray',color:{backgroundColor: '#BBBBBB'}},
  
      ];
  
    }
  
    render() {
      return (
        <View style={styles.container}>
          
          <View style={styles.header}>
            <Text style={styles.headerText}>Commodore 64 colors</Text>
          </View>
          
          <View style={styles.tableHeader}>
              <Text style={styles.tableColorHeaderItem1}>DEC</Text>
              <Text style={styles.tableColorHeaderItem2}>HEX</Text>
              <Text style={styles.tableColorHeaderItem3}>NAME</Text>
              <Text style={styles.tableColorHeaderItem4}>RGB</Text>            
              <Text style={styles.tableColorHeaderItem5}>COLOR</Text>
          </View>
  
          <View style={styles.table}> 
            <FlatList
              data= {this.notatedList}
              initialNumToRender={16}
              renderItem={({item,index}) =>
                (index % 2)?
                  <View style={styles.tableRowOdd}>
                    <Text style={styles.tableColorItem1}>{item.key}</Text>
                    <Text style={styles.tableColorItem2}>{dec2HexShort(item.key)}</Text>
                    <Text style={styles.tableColorItem3}>{item.name}</Text>
                    <Text style={styles.tableColorItem4}>{item.rgb}</Text>                  
                    <Text style={styles.tableColorItem5}>
                      <Text style={ item.color }>        </Text>
                    </Text>
                  </View>
                :
                  <View style={styles.tableRowEven}>
                    <Text style={styles.tableColorItem1}>{item.key}</Text>
                    <Text style={styles.tableColorItem2}>{dec2HexShort(item.key)}</Text>
                    <Text style={styles.tableColorItem3}>{item.name}</Text>
                    <Text style={styles.tableColorItem4}>{item.rgb}</Text>                  
                    <Text style={styles.tableColorItem5}>
                      <Text style={ item.color }>        </Text>
                    </Text>
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
    color: {
      width: 10,
      backgroundColor: 'black'
    },
  })