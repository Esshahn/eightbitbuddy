import React from 'react';
import { Alert, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { dec2Hex, dec2Bin, hex2Dec, hex2Bin, bin2Dec, bin2Hex } from '../modules/Converter';
import { thisExpression } from '@babel/types';



export default class HomeScreen extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { dec: '', hex: '', bin: '', carry: '0', pressable: false };
      this.bgColor = 'red';
      
      
    }

    convert_dec(text){
      let cleaned = text.replace(/[^0-9]/g, ""); // accept only 0-9
      
      let pressable = false;
      if(parseInt(cleaned,10)<256) pressable = true; // only allow shifting when 8 bit number
      
      if (cleaned != ""){
        this.setState({dec: cleaned, hex: dec2Hex(cleaned), bin: dec2Bin(cleaned), pressable: pressable});
      }else{
        let cleaned = "";
        this.setState({dec: cleaned, hex: cleaned, bin: cleaned, pressable: false});
      } 
    }

    convert_hex(text){
      let cleaned = text.replace(/[^0-9a-fA-F]/g, ""); // accept only 0-9 and a-f

      let pressable = false;
      if(parseInt(cleaned,16)<256) pressable = true; // only allow shifting when 8 bit number
      
      if (cleaned != ""){
        this.setState({dec: hex2Dec(cleaned), hex: cleaned, bin: hex2Bin(cleaned), pressable: pressable});
      }else{
        let cleaned = "";
        this.setState({dec: cleaned, hex: cleaned, bin: cleaned, pressable: false});
      }
    }

    convert_bin(text){
      let cleaned = text.replace(/[^0-1]/g, "");  // accept only 0-1

      let pressable = false;
      if(parseInt(cleaned,2)<256) pressable = true; // only allow shifting when 8 bit number
      
      if (cleaned != ""){
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


    convert_rol(){
      // this is a bit more complicated because shift left does 32 bit in JS, not 8 bit
      // therefore I can't shift (or don't know how to limit the result within 8 bit)
      // but do string operations instead
      
      let result = dec2Bin(this.state.dec); // first give me the binary version of the decimal number entered
      let temp_carry = result.slice(0,1);   // the most significant bit goes into the temp carry
      
      result = result.slice(-7) + this.state.carry;      // now we drop the first character ( most significant bit) and add the carry

      result = parseInt(result,2);          // we convert the string into the binary number
      result = result.toString(10);         // and the number into decimal string (needed as input for the function below)
     
      this.setState({dec: result, hex: dec2Hex(result), bin: dec2Bin(result), carry: temp_carry});
    }

    convert_ror(){
      // this is a bit more complicated because shift left does 32 bit in JS, not 8 bit
      // therefore I can't shift (or don't know how to limit the result within 8 bit)
      // but do string operations instead
      
      let result = dec2Bin(this.state.dec); // first give me the binary version of the decimal number entered
      let temp_carry = result.slice(-1);   
      
      result =  this.state.carry + result.slice(0,7);     

      result = parseInt(result,2);          // we convert the string into the binary number
      result = result.toString(10);         // and the number into decimal string (needed as input for the function below)
     
      this.setState({dec: result, hex: dec2Hex(result), bin: dec2Bin(result), carry: temp_carry});
    }

    toggle_carry(){
      if (this.state.carry == "0"){
        this.state.carry = "1";
      } else {
        this.state.carry = "0";
      }
      this.setState({carry: this.state.carry});
     
    }

    getTimeColor(){

      this.today = new Date();
      this.hour = this.today.getHours();
      this.minutes = this.today.getMinutes();

      if (this.hour < 7 || this.hour >= 22){ 
        this.bgColor = 'black';
      } else {
        this.bgColor = 'darkslategrey';
      }

      if(this.hour == 13 && this.minutes == 37){
        this.bgColor = 'hotpink';
      }
    }




    render() {

        this.getTimeColor();

        return (
          <View style={[styles.container,{backgroundColor:this.bgColor}]}>
          
          
            <View style={styles.header}>
              <Text style={styles.headerText}>Converter</Text>
            </View>

          
            <View style={styles.content}>

                <View style={styles.inputRow}>
                    <View style={styles.inputRowLeft}>
                      <Text style={styles.textNormal}>#</Text>
                    </View>
                    <View style={styles.inputRowMiddle}>

                      <TextInput 
                        style={[styles.inputField,styles.textNormal]}
                        autoCapitalize={"characters"}
                        autoFocus={false}
                        keyboardType={"numeric"}
                        clearButtonMode={"always"}
                        placeholder={"Decimal"}
                        placeholderTextColor={'white'}
                        maxLength={5}
                        selectionColor={'black'}
                        onChangeText={(text) => this.convert_dec(text)} 
                        value={this.state.dec}
                      />

                    </View>
                    <View style={styles.inputRowRight}></View>
                </View>



                <View style={styles.inputRow}>
                    <View style={styles.inputRowLeft}>
                      <Text style={styles.textNormal}>$</Text>
                    </View>
                    <View style={styles.inputRowMiddle}>

                        <TextInput 
                          style={[styles.inputField,styles.textNormal]}
                          autoCapitalize={"characters"}
                          clearButtonMode={"always"}
                          placeholder={"Hexadecimal"}
                          placeholderTextColor={'white'}
                          selectionColor={'black'}
                          maxLength={4}
                          onChangeText={(text) => this.convert_hex(text)} 
                          value={this.state.hex}
                        />

                    </View>
                    <View style={styles.inputRowRight}></View>
                </View>



                <View style={styles.inputRow}>
                    <View style={styles.inputRowLeft}>
                      <Text style={styles.textNormal}>%</Text>
                    </View>
                    <View style={styles.inputRowMiddle}>

                        <TextInput 
                          style={[styles.inputField,styles.textNormal, styles.textSmaller]}
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

                    </View>
                    <View style={styles.inputRowRight}>

                      <TouchableOpacity style={[styles.carry, { opacity: this.state.pressable ? 1 : 0.3 }]} onPress= {() => this.toggle_carry(this)} disabled={!this.state.pressable} >
                        <Text style={styles.buttonTextCarry}>{this.state.carry}</Text>
                      </TouchableOpacity>

                    </View>
                </View>

               

                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={[styles.button, { opacity: this.state.pressable ? 1 : 0.3 }]} onPress= {() => this.convert_asl(this)} disabled={!this.state.pressable} >
                    <Text style={styles.buttonText}>ASL</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.button, { opacity: this.state.pressable ? 1 : 0.3 }]} onPress= {() => this.convert_lsr(this)} disabled={!this.state.pressable} >
                    <Text style={styles.buttonText}>LSR</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.button, { opacity: this.state.pressable ? 1 : 0.3 }]} onPress= {() => this.convert_rol(this)} disabled={!this.state.pressable} >
                    <Text style={styles.buttonText}>ROL</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.button, { opacity: this.state.pressable ? 1 : 0.3 }]} onPress= {() => this.convert_ror(this)} disabled={!this.state.pressable} >
                    <Text style={styles.buttonText}>ROR</Text>
                  </TouchableOpacity>
                </View>
          
              </View>

              <View style={styles.spacer}></View>

        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
    
    },

    content: {
      padding: 20,
      flex: 4,
      
    },

    inputRow: {
      flexDirection: 'row',
      borderBottomColor: 'white',
      borderBottomWidth: 2, 
      paddingTop: 10,
      paddingBottom: 6
    },

    inputRowLeft: {
      flex: 0.8,
      margin: 0,
      padding: 0, 
     
    },

    inputRowMiddle: {
      flex: 8,
      margin: 0,
      padding: 0,
     
    },

    inputRowRight: {
      flex: 1,
      margin: 0,
      padding: 0,
     
    },

    buttonContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
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

    buttonTextCarry: {
      color: 'white',
      fontSize: 24,
      fontFamily: "monospace",
      fontWeight: 'bold',
      
    },

    buttonText: {
      color: 'white',
      fontSize: 24,
      fontFamily: "courier",
      fontWeight: 'bold',
      lineHeight: 24,
    },

    carry:{
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
    },


    inputField: {
      borderBottomColor: 'white',
      margin: 0,
      padding: 0,
      
    },

    textNormal: {
      fontSize: 26,
      fontFamily: "courier",
      fontWeight: 'bold',
      color: 'white', 
    },

    textSmaller: {
      fontSize: 26,
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

    spacer:{
      flex: 1,
      
    },
    
  })