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
              <Text style={styles.headerText}>About 8bitbuddy</Text>
          </View>

          <View style={styles.content}>

              <View >
                <Text>
                8bitbuddy is a collection of useful little tools for developing in 6502 assembly. 
                </Text>
                <Text style={styles.h1}>Current features:</Text>
                <Text>- Instant conversion between decimal, hexadecimal and binary number systems</Text>
                <Text>- 6502 opcode simulation for ASL, LSR, ROL and ROR, including the CARRY</Text>
                <Text>- A handy table for quick review of the numbers 0 to 255</Text>
                <Text>- A color table for the Commodore 64 with dec, hex, rgb values, the name and the color</Text>

                <Text style={styles.h1}>Planned features (as in "wishlist"):</Text>

                <Text>- Additional color tables for other 8 bit machines: VC/VIC 20, C16,C116 & Plus/4</Text>
                <Text>- 3D engine with full AR support of 8 bit numbers in space</Text>

                <Text style={styles.p}>This is my first App ever. Seriously. That's why it sucks. If you find it useful though, I'm happy.</Text>
                
              </View>

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
    alignItems: 'center',
    backgroundColor: 'tomato',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },



  buttonText: {
    color: 'white',
    fontSize: 24,
    fontFamily: "courier",
    fontWeight: 'bold',
    lineHeight: 24,
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