import React, { Component } from "react";
import {TouchableOpacity, SafeAreaView, Text, StyleSheet} from 'react-native';

function RestaurantInfo(){
  return(
    <SafeAreaView style={stylesForMain.wrap}>
      <Text> Info</Text>
    </SafeAreaView>
  );
};

const stylesForMain = StyleSheet.create({
  wrap:{
    alignItems:'center',
    flex:1,
  },
})
export default RestaurantInfo;