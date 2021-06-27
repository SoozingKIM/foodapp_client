import {NavigationContainer} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const KeywordStart = ({navigation}) => {
  const [isPressed, setIsPressed] = useState(0);
  return (
    <>
      <StatusBar
        animated
        barStyle="default"
        style={{backgroundColor: 'black'}}
      />
      <SafeAreaView style={stylesForKeyword.wrap}>
        <View style={stylesForKeyword.black}>
          <View style={{flex: 1}}></View>
          <View style={stylesForKeyword.container}>
            <View style={stylesForKeyword.block}>
              <View style={stylesForKeyword.category}></View>
              <View style={stylesForKeyword.part}>
                <Text style={stylesForKeyword.title}>음식</Text>
              </View>
            </View>
            <View style={stylesForKeyword.block}>
              <View style={stylesForKeyword.category}></View>
              <View style={stylesForKeyword.part}>
                <Text style={stylesForKeyword.title}>시설</Text>
              </View>
            </View>
            <View style={stylesForKeyword.block}>
              <View style={stylesForKeyword.category}></View>
              <View style={stylesForKeyword.part}>
                <Text style={stylesForKeyword.title}>서비스</Text>
              </View>
            </View>
          </View>

          <View style={stylesForKeyword.ask}></View>
        </View>
        {KeywordText()}
        {changePage()}
      </SafeAreaView>
    </>
  );

  function KeywordText() {
    if (isPressed != 4) {
      return (
        <View
          style={{
            height: 490,
            width: '100%',
            position: 'absolute',
            alignItems: 'center',
          }}
        >
          <View style={stylesForKeyword.card}>{KeywordPage()}</View>
          <Image
            style={stylesForKeyword.logo}
            resizeMode="contain"
            source={require('../image/2/튜토리얼_토끼.png')}
          ></Image>
          <View style={stylesForKeyword.buttonContainer}>
            <CustomButton
              buttonColor={'#174323'}
              onPress={() => setIsPressed(isPressed + 1)}
            ></CustomButton>
          </View>
        </View>
      );
    }
  }
  function KeywordPage() {
    if (isPressed == 0) {
      return (
        <Text style={stylesForKeyword.text}>이제 너에 대해 잘 알았어!</Text>
      );
    }
    if (isPressed == 1) {
      return (
        <View>
          <Text style={stylesForKeyword.text}>요즘 시기, 외출할 때</Text>
          <Text style={stylesForKeyword.text}>위생에 대한 걱정이 많지?</Text>
        </View>
      );
    }
    if (isPressed == 2) {
      return (
        <View>
          <Text style={stylesForKeyword.text}>너가 어떤 환경에서</Text>
          <Text style={stylesForKeyword.text}>식사할 때 가장 만족스러운지</Text>
          <Text style={stylesForKeyword.text}>
            한 눈에 알려줄 안심키워드를 뽑아왔어.
          </Text>
        </View>
      );
    }
    if (isPressed == 3) {
      return (
        <View>
          <Text style={stylesForKeyword.text}>이 키워드는 너만의 안성맞춤</Text>
          <Text style={stylesForKeyword.text}>
            <Text style={{color: '#ef802f', fontWeight: 'bold'}}>안심식당</Text>{' '}
            추천을 위해 쓰일거야!
          </Text>
        </View>
      );
    }
  }
  function changePage() {
    if (isPressed == 4) {
      navigation.navigate('키워드선택창');
    }
  }
};

const stylesForKeyword = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#174323',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  black: {
    flex: 1,
    height: '100%',
    width: '100%',
    opacity: 0.7,
    backgroundColor: 'black',
  },
  container: {
    flex: 4.2,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
    //backgroundColor:'red',
  },
  block: {
    flex: 1,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'blue',
  },
  category: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    //backgroundColor:'red',
  },
  part: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    //backgroundColor:'yellow',
  },
  title: {
    //fontFamily:'나눔바른고딕',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  ask: {
    flex: 0.8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    //backgroundColor:'blue',
  },
  logo: {
    bottom: 274,
    left: 95,
    position: 'absolute',
    height: 203,
    width: 200,
    //sbackgroundColor:'blue',
  },
  buttonContainer: {
    width: 314,
    height: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 34,
    position: 'absolute',
  },
  card: {
    bottom: 114,
    left: 38,
    position: 'absolute',
    //사진 겹치게 하려고 절대경로 지정함
    height: 170,
    width: 314,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 7,
  },
});
export default KeywordStart;
