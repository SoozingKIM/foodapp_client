import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class BlinkingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {showImage: true};
 
    // Change the state every second 
    setInterval(() => {
      this.setState(previousState => {
        return { showImage: !previousState.showImage };
      });
    }, 
    500); // blinking time
  }
   
  render() {
    if(this.state.showImage==1){
      return(     
            <Image  style={{height:50, width:182, marginLeft:2}}
                source={require('../image/1/회원가입_말풍선.png')}>
            </Image>
        );
    }
    else{
        return(
            <View  style={{height:50, width:182, marginLeft:2}}>
            </View>
        );
    }
  }
}

