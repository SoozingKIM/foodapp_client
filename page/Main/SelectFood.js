import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, } from "react-native";

const SelectFood=()=>{
    return(
        <View style={stylesForSelect.wrap}>
            <View style={stylesForSelect.container}>
                <View style={stylesForSelect.head}>
                    <View style={stylesForSelect.title}>
                        <TouchableOpacity style={stylesForSelect.cancel}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>취소</Text>
                        </TouchableOpacity>
                        <Text style={stylesForSelect.text}>음식종류</Text>
                        <TouchableOpacity style={stylesForSelect.cancel}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>적용</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[stylesForSelect.foodContainer]}>
                    <TouchableOpacity style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                                <Image  style={{flex:0.8}}
                                        resizeMode='contain'
                                        source={require("./음식필터/006-japanese-food.png")}>

                                </Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>한식</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                            <Image  style={{flex:0.75}}
                                    resizeMode='contain'
                                    source={require("./음식필터/005-nigiri.png")}>
                            </Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>일식</Text>
                        </View>
                </TouchableOpacity>
                    <TouchableOpacity  style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                            <Image  style={{flex:0.7}}
                                    resizeMode='contain'
                                    source={require("./음식필터/007-noodles.png")}></Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>중식</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={stylesForSelect.foodContainer}>
                    <TouchableOpacity style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                            <Image  style={{flex:0.7}}
                                    resizeMode='contain'
                                    source={require("./음식필터/005-burger.png")}></Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>서양식</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                            <Image  style={{flex:0.75}}
                                    resizeMode='contain'
                                    source={require("./음식필터/010-earth-globe.png")}></Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>기타 외국식</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                            <Image  style={{flex:0.75}}
                                    resizeMode='contain'
                                    source={require("./음식필터/008-beer.png")}></Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>주점</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[stylesForSelect.foodContainer, {paddingBottom:22}]}>
                    <TouchableOpacity style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                            <Image  style={{flex:0.7}}
                                    resizeMode='contain'
                                    source={require("./음식필터/002-turkey.png")}></Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>치킨/피자</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                            <Image  style={{flex:0.7}}
                                    resizeMode='contain'
                                    source={require("./음식필터/003-piece-of-cake.png")}></Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>카페</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesForSelect.food}>
                        <View style={stylesForSelect.icon}>
                            <Image  style={{flex:0.8}}
                                    resizeMode='contain'
                                    source={require("./음식필터/009-steak.png")}></Image>
                        </View>
                        <View style={stylesForSelect.category}>
                            <Text style={stylesForSelect.text}>뷔페/레스토랑</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const stylesForSelect=StyleSheet.create({
    wrap:{
        flex:1,
        justifyContent:'flex-end',
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
    },
    container:{
        flex:0.65,
        backgroundColor:'#FBF8BE',
        justifyContent:'center',
    },
        head:{
            flex:0.7,
            //backgroundColor:'blue',
        },
            title:{
                flex:1,
                marginBottom:15,
                flexDirection:'row',
                alignItems:"center",
                justifyContent:'center',
                //backgroundColor:'yellow',
            },
            cancel:{
                height:'35%',
                width:'14%',
                marginHorizontal:63,
                alignItems:"center",
                justifyContent:'center',
                borderColor:'black',
                borderWidth:1,
                borderRadius:20,
            },
        foodContainer:{
            flex:1,
            paddingHorizontal:15,
            marginBottom:5,
            flexDirection:'row',
            //backgroundColor:'green',
        },
            food:{
                flex:1,
                marginHorizontal:10,
                //backgroundColor:'red',
            },
                icon:{
                    flex:1.5,
                    borderRadius:100,
                    borderColor:'black',
                    borderWidth:3.3,
                    marginHorizontal:7,
                    justifyContent:'center',
                    alignItems:'center',
                },
                category:{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundColor:'yellow',
                },
})

export default SelectFood;