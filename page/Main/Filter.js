import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import SelectFood from './SelectFood';


export default class Filter extends Component{
    constructor(props){
        super(props);
      }
      static defaultProps = {
        onPress: () => null,
      }
    // const onPressOut = () => {SelectFood}
    //  const onPressOut = () =>[console.log('Press Out !!!\n')]
      render(){

          return(
                  <TouchableOpacity style={styles.filter}
                                      // onPressOut={onPressOut}
                                      // onPressOut={SelectFood}
                                      onPress={this.props.onPress}
                                      >
                      <Text>음식 필터</Text>
                  </TouchableOpacity>
          )
      }
    // }
};

const styles=StyleSheet.create({
    filter:{
        height:'35%',
        width:'23%',
        alignItems:"center",
        justifyContent:'center',
        borderColor:'black',
        borderWidth:1,
        borderRadius:20,
      },
      filterC:{
          flex:1,
      }
})

//export default Filter;