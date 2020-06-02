import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Loginscreen extends React.Component{
    constructor(){
        super()
        this.state = {EMailID:'',Password:''}  
      }
      render(){
        return(<KeyboardAvoidingView style = {{marginTop:20,alignItems:'center'}}>
          <View>

        <Image
        source = {require("../assets/booklogo.jpg")}
        style = {{width:200,height:200}}/>

        <Text style = {{textAlign:'center', fontSize:30}}>
          WILLY
        </Text>
      <View>
        <TextInput  style = {StyleSheet.LoginBox} 
        placeholder = "Prithvijai01@gmail.com"
        keyBoardType ="Email-Adress"
        OnChnangeText = {(text) => {this.setState({EMailID:text})}}
        />
      </View>

          </View>


        </KeyboardAvoidingView>)
      }

}