import React from 'react';
import { Alert, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { dec2Hex, dec2Bin, hex2Dec, hex2Bin, bin2Dec, bin2Hex } from '../modules/Converter';



export default class HomeScreen extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { dec: '', hex: '', bin: '', pressable: false };
      
    }

    convert_dec(text){
      let cleaned = text.replace(/[^0-9]/g, ""); // accept only 0-9
      
      let pressable = false;
      if(parseInt(text,10)<256) pressable = true; // only allow shifting when 8 bit number
      
      if (text != ""){
        this.setState({dec: cleaned, hex: dec2Hex(cleaned), bin: dec2Bin(cleaned), pressable: pressable});
      }else{
        let cleaned = "";
        this.setState({dec: cleaned, hex: cleaned, bin: cleaned, pressable: false});
      }
    }

    convert_hex(text){
      let cleaned = text.replace(/[^0-9a-fA-F]/g, ""); // accept only 0-9 and a-f

      let pressable = false;
      if(parseInt(text,16)<256) pressable = true; // only allow shifting when 8 bit number
      
      if (text != ""){
        this.setState({dec: hex2Dec(cleaned), hex: cleaned, bin: hex2Bin(cleaned), pressable: pressable});
      }else{
        let cleaned = "";
        this.setState({dec: cleaned, hex: cleaned, bin: cleaned, pressable: false});
      }
    }

    convert_bin(text){
      let cleaned = text.replace(/[^0-1]/g, "");  // accept only 0-1

      let pressable = false;
      if(parseInt(text,2)<256) pressable = true; // only allow shifting when 8 bit number
      
      if (text != ""){
        this.setState({dec: bin2Dec(cleaned), hex: bin2Hex(cleaned), bin: cleaned, pressable: pressable});
      }else{
        let cleaned = "";
        this.setState({dec: cleaned, hex: cleaned, bin: cleaned, pressable: false});
      }
    }

    convert_lsr(){
      let result = (this.state.dec >> 1).toString(10);
      this.setState({dec: result, hex: dec2Hex(result), bin: dec2Bin(result)});
    }

    convert_asl_old(){
      let result = (this.state.dec << 1);
      
      if(result > 128) result = 0;
      result = result.toString(10);
      this.setState({dec: result, hex: dec2Hex(result), bin: dec2Bin(result)});
    }

    convert_asl(){
      // this is a bit more complicated because shift left does 32 bit in JS, not 8 bit
      // therefore I can't shift (or don't know how to limit the result within 8 bit)
      // but do string operations instead
      
      let result = dec2Bin(this.state.dec); // first give me the binary version of the decimal number entered
      result = result.slice(-7) + "0";      // now we drop the first character ( most significant bit) and add a 0 at the end
      result = parseInt(result,2);          // we convert the string into the binary number
      result = result.toString(10);         // and the number into decimal string (needed as input for the function below)
     
      this.setState({dec: result, hex: dec2Hex(result), bin: dec2Bin(result)});
    }




    render() {
        return (
          <View style={styles.container}>
          
          <View style={styles.header}>
            <Text style={styles.headerText}>Converter</Text>
          </View>



          <View style={styles.inputFieldBlock}>
            
            <TextInput 
              style={styles.inputField}
              autoCapitalize={"characters"}
              autoFocus={true}
              keyboardType={"numeric"}
              clearButtonMode={"always"}
              placeholder={"Decimal"}
              placeholderTextColor={'white'}
              maxLength={5}
              selectionColor={'black'}
              onChangeText={(text) => this.convert_dec(text)} 
              value={this.state.dec}
            />

            
            <TextInput 
              style={styles.inputField}
              autoCapitalize={"characters"}
              clearButtonMode={"always"}
              placeholder={"Hexadecimal"}
              placeholderTextColor={'white'}
              selectionColor={'black'}
              maxLength={4}
              onChangeText={(text) => this.convert_hex(text)} 
              value={this.state.hex}
            />
          

            <TextInput 
              style={styles.inputField}
              autoCapitalize={"characters"}
              keyboardType={"numeric"}
              clearButtonMode={"always"}
              placeholder={"Binary"}
              placeholderTextColor={'white'}
              maxLength={16}
              selectionColor={'black'}
              onChangeText={(text) => this.convert_bin(text)}
              value={this.state.bin}
            />


          <View style={styles.buttonContainer}>

            <TouchableOpacity style={[styles.button, { opacity: this.state.pressable ? 1 : 0.5 }]} onPress= {() => this.convert_asl(this)} disabled={!this.state.pressable} >
              <Text style={styles.buttonText}>ASL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { opacity: this.state.pressable ? 1 : 0.5 }]} onPress= {() => this.convert_lsr(this)} disabled={!this.state.pressable} >
              <Text style={styles.buttonText}>LSR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { opacity: this.state.pressable ? 1 : 0.5 }]} onPress= {() => this.convert_lsr(this)} disabled={!this.state.pressable} >
              <Text style={styles.buttonText}>ROL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { opacity: this.state.pressable ? 1 : 0.5 }]} onPress= {this.convert_rol} disabled={!this.state.pressable} >
              <Text style={styles.buttonText}>ROR</Text>
            </TouchableOpacity>

          </View>

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

    buttonContainer: {
      marginTop: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    button: {
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 6,
      height: 46
    },

    buttonText: {
      color: 'tomato',
      fontSize: 24,

    },


    inputField: {
      marginBottom: 10,
      paddingTop: 6,
      paddingBottom: 0,
      fontSize: 30,
      fontFamily: "courier",
      fontWeight: 'bold',
      color: 'white', 
      borderBottomColor: 'white',
      borderBottomWidth: 3,     
    },

    inputLabel:{
      color: 'white',
      fontSize: 18,      
    },

    inputFieldBlock: {
      paddingLeft: 40,
      paddingTop: 10,
      paddingRight: 40,     
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