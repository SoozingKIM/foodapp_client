import React, { Component, useState, useEffect } from 'react'; 
import { StyleSheet,SafeAreaView, Text, View, Image, StatusBar, } from 'react-native';
import CustomButton from '../components/CustomButton'
import BlinkingText from '../components/BlinkText'
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
// import {chooseSex} from './DropDown'

const TutorialPage=()=>{
    const navigation = useNavigation();
    const [isPressed, setIsPressed]=useState(0);
    
    // const [openSex, setOpen] = useState(false);
    // const [valueSex, setValue] = useState(null);
    // const [itemsSex, setItems] = useState([
    //   {label: '여성', value: 'hi'},
    //   {label: '남성', value: 'male'},
    //   {label: '그 외', value: 'other'}
    // ]);

   
    // const [openAge, setOpen] = useState(false);
    // const [valueAge, setValue] = useState(null);
    // const [itemsAge, setItems] = useState([
    //   {label: '20대 이하', value: 'teen'},
    //   {label: '20~24세', value: 'earlyTwenties'},
    //   {label: '25~29세', value: 'lateTwenties'},
    //   {label: '30대', value: 'thirties'},
    //   {label: '40대', value: 'forties'},
    //   {label: '50대', value: 'fifties'},
    //   {label: '60대 이상', value: 'sixtiesAbove'},
    // ]);

    // const [openJob, setOpenJob] = useState(false);
    // const [valueJob, setValueJob] = useState(null);
    // const [itemsJob, setItemsJob] = useState([
    //   {label: '학생', value: 'student'},
    //   {label: '직장인', value: 'officeWorker'},
    //   {label: '전업주부', value: 'stayAtHome'},
    //   {label: '개인 사업 / 프리랜서', value: 'selfEmployed'},
    //   {label: '그 외', value: 'other'},
    // ]);

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
                <View style={{flex:1, justifyContent:'center', backgroundColor:'yellow'}}>
                    <Text>성별</Text>
                    
                </View>
                 {/* {chooseSex} */}
                     <DropDownPicker
                        open={openSex}
                        value={valueSex}
                        items={itemsSex}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={{flex:1}}
                        listItemContainer={{
                        height: 50
                        }}
                        dropDownContainerStyle={{
                        backgroundColor: "#fff"
                        }}
                        />
                      
                <View style={{flex:1, justifyContent:'center',}}>
                    <Text>나이</Text>
                   
                </View>
                <View style={{flex:1, justifyContent:'center', }}>
                    <Text>직업</Text>
                    {/* <DropDownPicker
            open={openJob}
            value={valueJob}
            items={itemsJob}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          /> */}
                </View>
            </View>
            )
            
        }
    }

    function changePage() {
        if(isPressed==3){
            navigation.push('키워드설명창');
            sendValue(valueSex);
        }
    }

    async function sendValue(valueSex){
        try{
            await fetch('http://3.36.248.216:8080/users',{
              method: 'post',
              mode: 'cors',
              headers:{
              //  'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  "username": "why did it happen",
                  "email": "new@gmail.com", 
                  "age": "thirties", 
                  "job": "stayAtHome", 
                  "sex": valueSex
              })
            })
            .then(res => res.json())
            .then(res => {
              if (res.success) {
                 // alert("저장 완료");
                 console.log("success")
              }
            })
            ;
          }
        catch(e){
          console.log(e)
        }
    }
    
}

    // function DropdownSex() {

    //     return (
    //       <DropDownPicker
    //         open={openSex}
    //         value={valueSex}
    //         items={itemsSex}
    //         setOpen={setOpen}
    //         setValue={setValue}
    //         setItems={setItems}
    //       />
    //     );
    //   }
      
    //   function DropdownAge(){

      
    //     return (
    //       <DropDownPicker
    //         open={openAge}
    //         value={valueAge}
    //         items={itemsAge}
    //         setOpen={setOpen}
    //         setValue={setValue}
    //         setItems={setItems}
    //       />
    //     );
    //   }
    //   function DropdownJob(){

      
    //     return (
    //       <DropDownPicker
    //         open={openJob}
    //         value={valueJob}
    //         items={itemsJob}
    //         setOpen={setOpen}
    //         setValue={setValue}
    //         setItems={setItems}
    //       />
    //     );
    //   }




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
       // backgroundColor:'yellow',
    }
});


export default TutorialPage;