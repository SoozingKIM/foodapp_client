import React, {Component, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import BlinkImage from '../components/BlinkImage';
import {useNavigation} from '@react-navigation/native';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

const LoginPage = ({navigation}) => {
  const [result, setResult] = useState<string>('');

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    setResult(JSON.stringify(token));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setResult(message);
  };

  const getProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getKakaoProfile();

    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };

  return (
    <SafeAreaView style={stylesForLogin.wrap}>
      <View style={stylesForLogin.Container}>
        <View style={stylesForLogin.loginContainer1}>
          <ImageBackground
            style={{width: 306, height: 134, justifyContent: 'flex-end'}}
            source={require('../image/1/로그인_회원가입_토끼.png')}
          >
            <BlinkImage />
          </ImageBackground>
        </View>

        <View style={stylesForLogin.loginContainer2}>
          <View style={stylesForLogin.startWithSNS}>
            <TouchableOpacity activeOpacity={0.7}>
              {/* //   onPress={()=>console.log(result)}>                         */}
              <Image
                style={{width: 260, height: 46}}
                source={require('../image/1/네이버.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={stylesForLogin.startWithSNS}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => signInWithKakao()}
            >
              <Image
                style={{width: 260, height: 46}}
                source={require('../image/1/카카오.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={stylesForLogin.startWithSNS}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                style={{width: 260, height: 46}}
                source={require('../image/1/지메일.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={stylesForLogin.loginContainer3}>
          <Text>아이디가 이미 있으신가요?</Text>
          <Text></Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('튜토리얼창')}
          >
            <Text style={{fontWeight: 'bold'}}>로그인 하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesForLogin = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#FBF8BE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container: {
    width: 286,
    height: 562,
    //backgroundColor: 'red',
  },
  loginContainer1: {
    flex: 2,
    marginTop: 59,
    marginLeft: 7,
    //  backgroundColor:'blue',
  },

  loginContainer2: {
    flex: 2,
    //  backgroundColor: 'green',
  },
  startWithSNS: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    //backgroundColor: 'yellow',
  },
});

export default LoginPage;
