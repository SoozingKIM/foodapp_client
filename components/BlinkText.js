import React, { Component } from 'react';
import { Text, } from 'react-native';

export default class BlinkingText extends Component {
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
      <Text style = {{fontWeight:this.props.fontWeight, fontSize:this.props.fontSize, 
                            marginTop:this.props.marginTop, color:this.props.color1}}>{display}</Text>);
    }
    else{
      return(<Text style = {{fontWeight:this.props.fontWeight, fontSize:this.props.fontSize, 
                            marginTop:this.props.marginTop, color:this.props.color2}}>{display}</Text>);
    }
    //let display = this.state.showText ? this.props.text : ' 안심식당';
    // return (
    //   <Text style = {{ fontWeight: 'bold', fontSize : 20 , marginTop : 10 }}>{display}</Text>
    // );
  }
}
