import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,} from 'react-native';

export default class KeywordOption extends Component{
    constructor(props){
      super(props);
    }
    state = {
        press : false,
    }
    render(){
        const Select=press=>{
            if(this.state.press==true){
                return '#FEE922';
            }
            else{
                return '#FBF8BE';
            }
        };
      return (
        <TouchableOpacity   style={[styles.button, {backgroundColor: Select(this.state.press)}]}
                            onPress={()=>this.setState({ press: !this.state.press })}
                            TouchableOpacity={0.9}>
            <Text style={styles.title}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    };
};


  const styles = StyleSheet.create({
    button:{
        backgroundColor:'#174323',
        paddingHorizontal:20,
        height:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
    },
    title: {
        fontSize: 15,
        color: 'black',
        fontWeight:'bold',
    },
  });






// import React, { Component, useState } from 'react';
// import { StyleSheet, SafeAreaView,View, Text, TouchableOpacity,} from 'react-native';

// // const KeywordOption = () => 

// // }

// const KeywordOption = () =>{
//     return(
//         <View style={stylesForOption.Options}>

//         </View>
//     )
// }

// const stylesForOption = StyleSheet.create({
//     Options:{
//         flex:1,
//         height:'100%',

//         backgroundColor:'orange',
//     },
// });

// export default KeywordOption;