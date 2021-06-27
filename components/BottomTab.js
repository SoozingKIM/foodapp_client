import React, { Component } from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../page/Main/Home'
import RestaurantInfo from '../page/Main/RestaurantInfo'
import Add from '../page/Main/Add'
import Live from '../page/Main/Live'
import MyInfo from "../page/Main/MyInfo";
import { View, Image, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel:false,
      style:{
        backgroundColor:'#FFFEEE',
        height: 90,
        position: ''
      },
      inactiveTintColor:'black',
    }}>
      <Tab.Screen name="Home" component={ Home } 
        options={{
          tabBarIcon: ({focused})=> (
            <View style={{justifyContent:'center',alignItems:'center', top:7}}>
              <Image source={require('../image/메인화면/005-cutlery.png')}
                    resizeMode='contain'
                    style={[stylesForTab.Icon,{tintColor: focused ? 'skyblue':'black'}]}
              >
              </Image>
              <Text style={[stylesForTab.Text,{color: focused ? 'skyblue':'black'}]}>안심 맛집</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="RestaurantInfo" component={ RestaurantInfo } 
        options={{
          tabBarIcon: ({focused})=> (
            <View style={{justifyContent:'center',alignItems:'center', top:7}}>
              <Image source={require('../image/메인화면/006-speech-bubble.png')}
                    resizeMode='contain'
                    style={[stylesForTab.Icon,{tintColor: focused ? 'skyblue':'black'}]}
              >
              </Image>
              <Text style={[stylesForTab.Text,{color: focused ? 'skyblue':'black'}]}>우리 동네 Talk</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Add" component={ Add } 
        options={{
          tabBarIcon: ({focused})=> (
            <View style={{top:7}}>
              <View style={[stylesForTab.Add,{backgroundColor: focused ? 'skyblue':'#174323'}]}>
                <Text style={stylesForTab.Plus}>+</Text>
              </View>
            </View>
          )
        }}
      />      
      <Tab.Screen name="Live" component={ Live } 
        options={{
          tabBarIcon: ({focused})=> (
            <View style={{justifyContent:'center',alignItems:'center', top:7}}>
              <Image source={require('../image/메인화면/007-map.png')}
                    resizeMode='contain'
                    style={[stylesForTab.Icon,{tintColor: focused ? 'skyblue':'black'}]}
              >
              </Image>
              <Text style={[stylesForTab.Text,{color: focused ? 'skyblue':'black'}]}>실시간 밀집도</Text>
            </View>
          ) 
        }}
      />      
      <Tab.Screen name="MyInfo" component={ MyInfo } 
        options={{
          tabBarIcon: ({focused})=> (
            <View style={{justifyContent:'center',alignItems:'center', top:7}}>
              <Image source={require('../image/메인화면/001-gear.png')}
                    resizeMode='contain'
                    style={[stylesForTab.Icon,{tintColor: focused ? 'skyblue':'black'}]}
              >
              </Image>
              <Text style={[stylesForTab.Text,{color: focused ? 'skyblue':'black'}]}>내 정보</Text>
            </View>
          ) 
        }}
      />
    </Tab.Navigator>
  );
}

const stylesForTab = StyleSheet.create({
  Icon:{   
    width:28,
    height:45,
  },
  Text:{
    fontSize:12.5,
    fontWeight:'bold',
  },
  Add:{
    borderRadius:100,
    height:55,
    width:55,
    justifyContent:'center',
    alignItems:'center',
  },
    Plus:{
      fontSize:53,
      fontWeight:'600',
      color:'white',
      position:'absolute',
      bottom:-1
    }
  
})
export default BottomTab;
