import React, { Component, useState } from 'react'; 
import { StyleSheet,SafeAreaView, Text, View, Image, StatusBar, } from 'react-native';
import CustomButton from '../components/CustomButton'
import BlinkingText from '../components/BlinkText'
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';


const TutorialPage=()=>{
    const navigation = useNavigation();
    const [isPressed, setIsPressed]=useState(0);
    if(isPressed==3){ setIsPressed(0)};
    return(
        <SafeAreaView style={stylesForTutorial.wrap}> 
            <View style={stylesForTutorial.card}>
                    { TutorialPage1() }
                    { TutorialPage2() }
                    { TutorialPage3() }
                    { changePage() }
            </View>
            <Image  style={stylesForTutorial.logo}
                    resizeMode="contain"
                    source={require('../image/2/튜토리얼_토끼.png')}>
            </Image> 
            <View style={stylesForTutorial.buttonContainer}>
                <CustomButton   buttonColor={'#174323'}
                                onPress={ () => setIsPressed(isPressed+1) }>
                </CustomButton>
            </View>
        </SafeAreaView>
    )

    function TutorialPage1(){
         if(isPressed!=2)
        return(
            <View>
                <Text style={stylesForTutorial.text}>안녕?</Text>
                <Text style={stylesForTutorial.text}>나는 이 식당의 주방장  
                    <Text style={[stylesForTutorial.text,{color:'#ef802f',fontWeight:'bold'}]}> 안심한끼</Text>
                    야.
                </Text>  
                <Text style={stylesForTutorial.text}>오롯이 너만을 위한
                    <BlinkingText   fontSize={15} marginTop={7} fontWeight={'bold'} 
                                    color1={'black'} color2={'#ef802f'} 
                                    text=' 안심식당'>
                    </BlinkingText>
                    을 소개해 줄게!
                </Text>
            </View>
        );
        
    }

    function TutorialPage2(){
        if(isPressed==1){
            return (
                <View style={{ flex:1, alignItems:'center', marginTop:20,justifyContent:'center'}}>
                    <Image  source={require('../image/2/안심식당_사진.png')}
                        style={{height:152, width:162, marginBottom:23}} >
                    </Image>
                    <Text style={stylesForTutorial.text}>
                        <Text style={[stylesForTutorial.text,{color:'#ef802f',fontWeight:'bold'}]}>안심식당</Text>
                        이란 정부와 지자체가
                    </Text>
                    <Text style={stylesForTutorial.text}>
                        '믿고 먹을만하다'고 인증한 식당들이야.
                    </Text>
                </View>
           );
        }
    }

    function TutorialPage3(){
        if(isPressed==2){
            return(
            <View>
                <Text style={stylesForTutorial.text}>빅데이터 기반의 안성맞춤 추천을 위해서</Text>
                <Text style={stylesForTutorial.text}>몇 가지 주문을 받아볼게.</Text>
                <View style={{flex:1, justifyContent:'center', }}>
                    <Text>성별</Text>
                    <ModalDropdown options={['여성', '남성']}
                                    style={stylesForTutorial.select}        
                    />
          
                </View>
                <View style={{flex:1, justifyContent:'center',}}>
                    <Text>나이</Text>
                    <ModalDropdown options={['학생', '주부']}
                                    style={stylesForTutorial.select}
                    />
                </View>
                <View style={{flex:1, justifyContent:'center', }}>
                    <Text>직업</Text>
                    <ModalDropdown options={['학생', '주부']}
                                    style={stylesForTutorial.select}
                    />
                </View>
            </View>
            )
            
        }
    }

    function changePage() {
        if(isPressed==3){
            navigation.push('키워드설명창');
        }
    }

}




const stylesForTutorial = StyleSheet.create({
    wrap:{
        flex: 1,
        backgroundColor: '#FBF8BE',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logo:{
        top:141,
        left:95,
        position:'absolute',
        height:203,
        width:200,
        alignItems:'center',
        //backgroundColor:'blue',
    },
    card:{
        bottom:124,
        left:38,
        position:'absolute', 
        //사진 겹치게 하려고 절대경로 지정함
        height:386, 
        width:314,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: 'white',
        paddingTop:40,
  
    },
        text:{
            textAlign:'center',
            fontSize:15,
            marginTop:7,
            textAlignVertical:'center',
            //fontFamily:Fonts.NanumBarunGothic,
        },
    buttonContainer:{
        width:314,
        height:90,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    select:{
        height:30,
        justifyContent:'center',
        backgroundColor:'yellow',
    }
});


export default TutorialPage;