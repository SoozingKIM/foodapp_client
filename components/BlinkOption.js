import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class BlinkOption extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
 
    // Change the state every second 
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 
    500); // blinking time
  }
   
  render() {
    let display = this.props.text;
    if(this.state.showText==1){
      return(
          <View style={[styles.part, {borderColor:this.props.color1}]}>
            <Text style = {{fontWeight:this.props.fontWeight, fontSize:this.props.fontSize, 
                  marginTop:this.props.marginTop, color:this.props.color1}}>{display}</Text>                 
          </View>
        );
    }
    else{
      return(
        <View style={[styles.part, {borderColor:this.props.color2}]}>
          <Text style = {{fontWeight:this.props.fontWeight, fontSize:this.props.fontSize, 
                marginTop:this.props.marginTop, color:this.props.color2}}>{display}</Text>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
    part:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent: 'center',
        borderTopWidth:1,
        borderBottomWidth:1,
    },
});
