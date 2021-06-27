import React, {Component} from 'react';
import {TouchableOpacity, SafeAreaView, Text, StyleSheet} from 'react-native';

function Add (){
  return(
    <SafeAreaView style={stylesForMain.wrap}>
      <Text>Add</Text>
    </SafeAreaView>
  );
};

const stylesForMain = StyleSheet.create({
  wrap:{
    alignItems:'center',
    flex:1,
  },
})
export default Add;
