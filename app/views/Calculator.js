import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { dec2Hex, dec2Bin, hex2Dec, hex2Bin, bin2Dec, bin2Hex } from '../modules/Converter';



export default class HomeScreen extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { dec: '', hex: '', bin: '' };
    }

    convert_dec(text){
      if (text != ""){
        let cleaned = text.replace(/[^0-9]/g, "");
        this.setState({dec: cleaned, hex: dec2Hex(cleaned), bin: dec2Bin(cleaned)});
      }else{
        let cleaned = "";
        this.setState({dec: cleaned, hex: cleaned, bin: cleaned});
      }
    }

    convert_hex(text){
      
      if (text != ""){
        let cleaned = text.replace(/[^0-9a-fA-F]/g, "");
        this.setState({dec: hex2Dec(cleaned), hex: cleaned, bin: hex2Bin(cleaned)});
      }else{
        let cleaned = "";
        this.setState({dec: cleaned, hex: cleaned, bin: cleaned});
      }
    }

    convert_bin(text){
      if (text != ""){
        let cleaned = text.replace(/[^0-1]/g, "");
        this.setState({dec: bin2Dec(cleaned), hex: bin2Hex(cleaned), bin: cleaned});
      }else{
        let cleaned = "";
        this.setState({dec: cleaned, hex: cleaned, bin: cleaned});
      }
    }

    render() {
        return (
          <View style={styles.container}>
          
          <View style={styles.header}>
            <Text style={styles.headerText}>Converter</Text>
          </View>



          <View style={styles.inputFieldBlock}>
            <Text style={styles.inputLabel}>Decimal</Text>
            <TextInput 
              style={styles.inputField}
              autoCapitalize={"characters"}
              keyboardType={"numeric"}
              clearButtonMode={"always"}
              placeholder={"Decimal"}
              placeholderTextColor={'white'}
              selectionColor={'black'}
              onChangeText={(text) => this.convert_dec(text)} 
              value={this.state.dec}
            />
          </View>



          <View style={styles.inputFieldBlock}>
            <Text style={styles.inputLabel}>Hexadecimal</Text>
            <TextInput 
              style={styles.inputField}
              autoCapitalize={"characters"}
              clearButtonMode={"always"}
              placeholder={"Hexadecimal"}
              placeholderTextColor={'white'}
              selectionColor={'black'}
              onChangeText={(text) => this.convert_hex(text)} 
              value={this.state.hex}
            />
          </View>




          <View style={styles.inputFieldBlock}>
            <Text style={styles.inputLabel}>Binary</Text>
            <TextInput 
              style={styles.inputField}
              autoCapitalize={"characters"}
              keyboardType={"numeric"}
              clearButtonMode={"always"}
              placeholder={"Binary"}
              placeholderTextColor={'white'}
              selectionColor={'black'}
              onChangeText={(text) => this.convert_bin(text)}
              value={this.state.bin}
            />
          </View>
          
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'tomato'
    },

    inputField: {
      
      borderColor: 'white', 
      borderWidth: 1,
      marginLeft: 0,
      marginRight: 20,
      paddingTop: 6,
      paddingBottom: 6,
      fontSize: 30,
      fontFamily: "courier",
      fontWeight: 'bold',
      color: 'white',
    },

    inputLabel:{
      color: 'white',
      fontSize: 18,      
    },

    inputFieldBlock: {
      paddingLeft: 40,
      paddingTop: 10,
      paddingRight: 20,
         
      
    },
    

    header: {
      
      backgroundColor: 'rgba(50,50,50,1.0)',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
      paddingTop: 10,
      marginBottom: 20
    },

    headerText: {
      color: 'white',
      fontSize: 24,

    },
    
  })