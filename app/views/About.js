import React from 'react';
import { Text, View, StyleSheet, Linking, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class OpcodeTable extends React.Component {
  render() {
    return (

        <View style={styles.tableContainer}>
            <View style={styles.tableHeader}><Text style={styles.tableHeaderText}>{this.props.header}</Text></View>
            <View style={styles.tableDescription}><Text style={styles.tableDescriptionText}>{this.props.description}</Text></View>
        </View>
    );
  }
}

export default class AboutScreen extends React.Component {

  render() {

   
    return (

      <View style={styles.container}>

          <View style={styles.header}>
              <Text style={styles.headerText}>About 8bitbuddy</Text>
          </View>

          <View style={styles.content}>

            <ScrollView>

            <Image source={require('../assets/logo.png')} />

              <View >
                <Text style={styles.h1}>
                8bb is a little tool for developing in 6502 assembly. 
                </Text>

                <Text style={styles.p}>Features: Instant conversion between decimal, hexadecimal and binary number systems, 
                6502 opcode simulation for ASL, LSR, ROL and ROR, including the CARRY, a handy table for quick review of the numbers 0 to 255 and a color table for the Commodore 64 with dec, hex, rgb values, the name and the color.
                </Text>

                <Text style={styles.p}>Opcode descriptions taken from www.6502.org</Text>

                <OpcodeTable header='ASL (Arithmetic Shift Left)' description='ASL shifts all bits left one position. 0 is shifted into bit 0 and the original bit 7 is shifted into the Carry.' />
                <OpcodeTable header='LSR (Logical Shift Right)' description='LSR shifts all bits right one position. 0 is shifted into bit 7 and the original bit 0 is shifted into the Carry.' />
                <OpcodeTable header='ROL (Rotate Left)' description='ROL shifts all bits left one position. The Carry is shifted into bit 0 and the original bit 7 is shifted into the Carry.' />
                <OpcodeTable header='ROR (Rotate Right)' description='ROR shifts all bits right one position. The Carry is shifted into bit 7 and the original bit 0 is shifted into the Carry.' />
              
                <View style={styles.spacer} />

                <Text style={styles.h1}>8bb is Open Source and free.</Text>
                <Text style={styles.p}>Contact me via one of the links below if you want a specific feature implemented.</Text>

                <Text style={styles.p}>This is my first App ever. Seriously. If you find it useful though, I'd be happy if you give this App a positive rating.</Text>

                <View style={styles.spacer} />
                <Button style={styles.button} title='Visit 8bitbuddy on Github' onPress={ ()=> Linking.openURL('https://github.com/Esshahn/eightbitbuddy') } />
                <View style={styles.spacer} />
                <Button style={styles.button} title='Visit www.awsm.de' onPress={ ()=> Linking.openURL('http://www.awsm.de') } />
                <View style={styles.spacer} />
                <Button style={styles.button} title='Follow me on Twitter @awsm9000' onPress={ ()=> Linking.openURL('https://twitter.com/awsm9000') } />
                <View style={styles.spacer} />
              </View>
              </ScrollView>
          </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'white',
  },

  content: {
    padding: 30,
    flex: 4,
    
  },

  spacer:{
    height: 20
  },


  button: {
    height: 200
  },


  tableHeader:{
    marginTop: 20,
    backgroundColor: 'black',
    padding: 6,
  },

  tableHeaderText:{
    fontWeight: 'bold',
    color: 'white',
  },

  tableDescription:{
    padding: 6,
    borderWidth: 1,
    borderColor: 'black',
  },


  p:{
    marginTop: 10
  },

  h1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black', 
    marginTop: 16,
  },

  header: {
    backgroundColor: 'rgba(50,50,50,1.0)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 20,
    
  },

  headerText: {
    color: 'white',
    fontSize: 24,

  },

  
})