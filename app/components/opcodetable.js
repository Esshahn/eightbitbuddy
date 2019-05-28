import React from 'react';
import { Text, View, StyleSheet, Linking, Button } from 'react-native';

export default class OpcodeTable extends React.Component {

  render() {
    return (

        <View style={styles.tableContainer}>
            <View style={styles.tableHeader}><Text style={styles.tableHeaderText}>HEADER</Text></View>
            <View style={styles.tableDescription}><Text style={styles.tableDescriptionText}>DESCRIPTION</Text></View>
            <View style={styles.tableExample}><Text style={styles.tableExampleText}>EXAMPLE</Text></View>
        </View>
    );
  }

  
}



const styles = StyleSheet.create({




  headerText: {
    color: 'white',
    fontSize: 24,

  },

  
})