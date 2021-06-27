import React, {Component} from 'react';
import {TouchableOpacity, View, SafeAreaView, Text, StyleSheet, useState} from 'react-native';
import SelectFood from './SelectFood';
import Filter from './Filter';

const Home=()=>{
  // const [isPressed, setIsPressed] = useState(0);
  return(
    <SafeAreaView style={stylesForHome.wrap}>
      <View style={stylesForHome.container}>
        <View style={stylesForHome.search}>
          <View style={stylesForHome.searchPart}>
              <View style={stylesForHome.searchArea}></View>
              <Text style={{color:'white', fontWeight:'bold', fontSize:19}}>에 있는 당신의 맛집</Text>
              <View style={stylesForHome.searchArea}></View>
          </View>
        </View>
        <View style={stylesForHome.banner}></View>
        <View style={stylesForHome.contents}>
          <View style={stylesForHome.head}>
            <View style={stylesForHome.filter}>
              <Text>정렬넣을곳</Text>
            </View>
            <Filter></Filter>
        </View>

        <Text> Home</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


const stylesForHome = StyleSheet.create({
  wrap:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#FFFEEE',
  },
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'#FFF',
  },
  search:{
    backgroundColor:'#174323',
    height:120,
    width:'100%',
    marginBottom:20,
    borderBottomLeftRadius:28,
    borderBottomRightRadius:28,
    justifyContent:'center',
    alignItems:'center',
  },
    searchPart:{
      height:'30%',
      width:'100%',
      backgroundColor:'blue',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
    },
      searchArea:{
        width:'13%',
        height:'100%',
        backgroundColor:'red',
        marginHorizontal:'2%',
      },
  banner:{
    width:'100%',
    height:180,
    backgroundColor:'gray',
  },
  contents:{
    flex:1,
    paddingHorizontal:'6%'
  },
  head:{
    height:70,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'yellow',
  },
  filter:{
    height:'35%',
    width:'23%',
    alignItems:"center",
    justifyContent:'center',
    borderColor:'black',
    borderWidth:1,
    borderRadius:20,
  },
})
export default Home;
