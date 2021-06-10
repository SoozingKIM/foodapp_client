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
   
    render(){
        let display = this.props.text;

        if(this.state.showText==1){
        return(
                <View style={[styles.border, {borderColor:this.props.color1}]}>
                    <Text style = {{fontWeight:this.props.fontWeight, fontSize:this.props.fontSize, 
                                    marginTop:this.props.marginTop, color:this.props.color1}}>{display}</Text>                
                </View>
            );
        }

        else{
        return(
                <View style={[styles.border, {borderColor:this.props.color2}]}>
                    <Text style = {{fontWeight:this.props.fontWeight, fontSize:this.props.fontSize, 
                                    marginTop:this.props.marginTop, color:this.props.color2}}>{display}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    border:{
        marginHorizontal:50,
        borderBottomWidth:1, 
        margin:30,
        paddingBottom:3,
       //backgroundColor:'green',
    },
});
