import React, {Component} from 'react';
import {TouchableOpacity, SafeAreaView, Text, StyleSheet} from 'react-native';

function MyInfo (){
  return(
    <SafeAreaView style={stylesForMain.wrap}>
      <Text>MyInfo</Text>
    </SafeAreaView>
  );
};

const stylesForMain = StyleSheet.create({
  wrap:{
    alignItems:'center',
    flex:1,
  },
})
export default MyInfo;
