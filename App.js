import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import KeywordStart from './page/KeywordStart';
import LoadingPage from './page/Loading';
import LoginPage from './page/Login';
import TutorialPage from './page/Tutorial';
import KeywordChoose from './page/KeywordChoose';
import Home from './page/Main/Home';
import SelectFood from './page/Main/SelectFood';
import BottomTab from './components/BottomTab';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';

class App extends Component {
  render() {
    const forFade = ({current}) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });
    
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="로그인창" component={LoginPage} />
          <Stack.Screen name="튜토리얼창" component={TutorialPage} />
          <Stack.Screen
            options={{cardStyleInterpolator: forFade}}
            name="키워드설명창"
            component={KeywordStart}
          />
          <Stack.Screen
            options={{cardStyleInterpolator: forFade}}
            name="키워드선택창"
            component={KeywordChoose}
          />
        </Stack.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      // <BottomTab/>
      // </NavigationContainer>



    );
  }
  // async componentDidMount(){
  //     try{
  //       await fetch('http://3.36.248.216:8080/users',{
  //         method: 'post',
  //         mode: 'cors',
  //         headers:{
  //         //  'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({

  //             "username": "why did it happen",
  //             "email": "new@gmail.com",
  //             "age": "thirties",
  //             "job": "stayAtHome",
  //             "sex": "female"
  //         })
  //       })
  //       .then(res => res.json())
  //       .then(res => {
  //         if (res.success) {
  //            // alert("저장 완료");
  //            console.log("success")
  //         }
  //       })
  //       ;
  //     }
  //   catch(e){
  //     console.log(e)
  //   }
  // }
}

export default App;
