import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,} from 'react-native';

export default class CustomButton extends Component{
    constructor(props){
      super(props);
    }
    static defaultProps = {
        title: '다음',
        buttonColor: '#000',
        titleColor: '#fff',
        onPress: () => null,
      }
    render(){
      return (
      <TouchableOpacity     style={[styles.button, {backgroundColor: this.props.buttonColor}]}
                            onPress={this.props.onPress}
                            TouchableOpacity={0.9}>
            <Text style={[styles.title, {color: this.props.titleColor}]}>{this.props.title}</Text>
      </TouchableOpacity>
      )
    }
}
  
  const styles = StyleSheet.create({
    button:{
        backgroundColor:'#174323',
        width:220,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
    },
    title: {
        fontSize: 18,
        color: '#FFF',
        fontWeight:'600'
    },
  });