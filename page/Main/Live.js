import React, {Component} from 'react';
import {TouchableOpacity, SafeAreaView, Text, StyleSheet} from 'react-native';

function Live (){
  return(
    <SafeAreaView style={stylesForMain.wrap}>
      <Text>Live</Text>
    </SafeAreaView>
  );
};

const stylesForMain = StyleSheet.create({
  wrap:{
    alignItems:'center',
    flex:1,
  },
})
export default Live;
