import React, { Component, useState } from 'react';
import { StyleSheet, SafeAreaView,View, Text, TouchableOpacity, Animated} from 'react-native';
import KeywordOption from '../components/KeywordOption'
import BlinkOption from '../components/BlinkOption'
import BlinkChoose from '../components/BlinkChoose'
import { useNavigation } from '@react-navigation/native'
import FadeIn from './FadeIn'

const KeywordChoose = () =>{

    const [isPressed, setIsPressed]=useState(0);
    return(
        <SafeAreaView style={stylesForKeyword.wrap}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                { AskTop() }
            </View>
            <View style={stylesForKeyword.container}>
                { Keyword1()}
                { Keyword2()}
                { Keyword3()}
            </View>
            <View style={stylesForKeyword.ask}>
                { AskBottom() }
                { Complete() }
            </View>
        </SafeAreaView>
    )

    function Keyword1(){
        if(isPressed==0){
            return(
                <View style={stylesForKeyword.block}>
                    <View style={stylesForKeyword.category}>
                    </View>
                    <TouchableOpacity   style={{flex:1,width:'100%'}} 
                                        onPress={()=>setIsPressed(1)}>
                        <BlinkOption  fontSize={24} fontWeight={'bold'} 
                                        color1={'white'} color2={'#FEE922'}
                                        text='음식'>
                        </BlinkOption>
                    </TouchableOpacity>
                </View>
            )
        }
        if(isPressed>0){
            return(
                <FadeIn style={stylesForKeyword.block}>
                    <View style={stylesForKeyword.category}>
                        <Text style={stylesForKeyword.text}>음식</Text>
                    </View>
                    <View style={stylesForKeyword.clicked}>
                        <View style={stylesForKeyword.option}>
                            <KeywordOption title={'음식물 재사용 X'}/>
                            <KeywordOption title={'공용 집기류 위생'}/>
                        </View>
                        <View style={stylesForKeyword.option}>
                            <KeywordOption title={'뷔페 서비스 보호 덮개'}/>
                            <KeywordOption title={'주방 오픈'}/>
                        </View>
                    </View>
                </FadeIn>
            )
        }
    }
    function Keyword2(){
        if(isPressed<1){
            return(
                <View style={stylesForKeyword.block}>
                    <View style={stylesForKeyword.category}>
                    </View>
                    <TouchableOpacity style={stylesForKeyword.part}>
                        <Text style={stylesForKeyword.title}>시설</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        if(isPressed==1){
            return(
                <View style={stylesForKeyword.block}>
                    <View style={stylesForKeyword.category}>
                    </View>
                    <TouchableOpacity   style={{flex:1,width:'100%'}}  
                                        onPress={()=>setIsPressed(2)}>
                        <BlinkOption   fontSize={24} fontWeight={'bold'} 
                                    color1={'white'} color2={'#FEE922'} 
                                    text='시설'>
                        </BlinkOption>
                    </TouchableOpacity>
                </View>
            )
        }
        if(isPressed>1){
            return(
                <FadeIn style={stylesForKeyword.block}>
                    <View style={stylesForKeyword.category}>
                        <Text style={stylesForKeyword.text}>시설</Text>
                    </View>
                    <View style={stylesForKeyword.clicked}>
                    <View style={stylesForKeyword.option}>
                            <KeywordOption title={'손 소독'}/>
                            <KeywordOption title={'식당 청결'}/>
                            <KeywordOption title={'음용 시설'}/>
                        </View>
                        <View style={stylesForKeyword.option}>
                            <KeywordOption title={'홀 정리 정돈'}/>
                            <KeywordOption title={'자리별 소스통, 수저통'}/>
                        </View>
                    </View>
                </FadeIn>
            )
        }
    }
    function Keyword3(){
        if(isPressed<2){
            return(
                <View style={stylesForKeyword.block}>
                    <View style={stylesForKeyword.category}>
                    </View>
                    <TouchableOpacity style={stylesForKeyword.part}>
                        <Text style={stylesForKeyword.title}>서비스</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        if(isPressed==2){
            return(
                <View style={stylesForKeyword.block}>
                    <View style={stylesForKeyword.category}>
                    </View>
                    <TouchableOpacity   style={{flex:1,width:'100%'}} 
                                        onPress={()=>setIsPressed(3)}>
                        <BlinkOption   fontSize={24} fontWeight={'bold'} 
                                        color1={'white'} color2={'#FEE922'} 
                                        text='서비스'>
                        </BlinkOption>
                    </TouchableOpacity>
                </View>
            )
        }
        if(isPressed>2){
            return(
                <FadeIn style={stylesForKeyword.block}>
                    <View style={stylesForKeyword.category}>
                        <Text style={stylesForKeyword.text}>서비스</Text>
                    </View>
                    <View style={stylesForKeyword.clicked}>
                        <View style={stylesForKeyword.option}>
                                <KeywordOption title={'환기'}/>
                                <KeywordOption title={'테이블 간격 및 칸막이'}/>
                        </View>
                        <View style={stylesForKeyword.option}>
                            <KeywordOption title={'조용한 분위기'}/>
                            <KeywordOption title={'종업원 청결도'}/>
                        </View>
                    </View>
                </FadeIn>
            )
        }
    }
    function AskTop(){
        if(isPressed>0&&isPressed<3){
            return(
                <FadeIn style={{alignItems:'center'}}>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>진하게 칠해진 버튼들이</Text>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>너에게 딱 맞는 안심 키워드야!</Text>
                </FadeIn>
            )
        }
        if(isPressed==3){
            return(
                <FadeIn>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>마음에 들어?</Text>
                </FadeIn>
            )
        }
        if(isPressed==4){
            return(
                <FadeIn style={{alignItems:'center'}}>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}> 선택 완료를 누르면 완성!</Text>
                </FadeIn>
            )
        }
        if(isPressed==5){
            return(
                <FadeIn style={{alignItems:'center'}}>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}> 버튼을 눌러 마음껏 수정하고 </Text>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>선택 완료를 눌러줘!</Text>
                </FadeIn>
               
            )
        }
    }
    function AskBottom(){
        if(isPressed==3){
            return(
                <FadeIn style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>setIsPressed(4)}>
                        <BlinkChoose    fontSize={20} fontWeight={'bold'} 
                                        color1={'white'} color2={'#EF802F'} 
                                        text='YES'>
                        </BlinkChoose>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>setIsPressed(5)}>
                        <BlinkChoose    fontSize={20} fontWeight={'bold'} 
                                        color1={'white'} color2={'#EF802F'} 
                                        text='NO'>                                    
                        </BlinkChoose>
                    </TouchableOpacity>
                </FadeIn>
            )
        }
    }
    //데이터 저장해놓는 함수
    //true인 키워드만 타이틀 모아서 title -> 영문으로 , 리스트화 하기
    //return 스트링리스트
    
    function Complete(){
        if (isPressed==4||isPressed==5){
            return(
                <TouchableOpacity   style={stylesForKeyword.complete}
                                    onPress={()=>setIsPressed(0)}>
                                    //서버에 전송하는 함수는 파라미터로 리스트를 받고 전송.
                    <FadeIn >
                        <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>선택 완료</Text>              
                    </FadeIn>
                </TouchableOpacity>
                                
            )
        }
    }

}

const stylesForKeyword = StyleSheet.create({
    wrap:{
        flex:1,
        backgroundColor:'#174323',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    container:{
        flex:4.2,
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent: 'center',
        //backgroundColor:'red',
    },
        block:{
            flex:1,
            width:'75%',
            alignItems:'center',
            justifyContent: 'center',
           // backgroundColor:'blue',
        },
            part:{
                flex:1,
                width:'100%',
                alignItems:'center',
                justifyContent: 'center',
                borderColor:'white',
                borderTopWidth:1,
                borderBottomWidth:1,
                //backgroundColor:'yellow',
            },
                title:{
                    //fontFamily:'나눔바른고딕',
                    fontSize:24,
                    color:'white',
                    fontWeight:'bold',
                },
            category:{
                width:'100%',
                height:40,
                paddingBottom:8,
                justifyContent:'flex-end',
                //backgroundColor:'red',
            },
            clicked:{
                flex:1,
                width:'100%',
                alignItems:'center',
                justifyContent: 'space-evenly',
                borderColor:'white',
                borderTopWidth:1,
                //backgroundColor:'yellow',
            },
            option:{
                flexDirection:'row',
                height:'30%',
                width:'100%',
                //backgroundColor:'orange',
                justifyContent:'space-between',
                alignItems:'center',
            },
    ask:{
        flex:0.8,
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
        //backgroundColor:'blue',
    },
       
    complete:{
        flex:0.4,
        width:'100%',
        backgroundColor: '#EF802F',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
    }
});

export default KeywordChoose;