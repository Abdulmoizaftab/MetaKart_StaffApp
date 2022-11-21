
import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App=() => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  

  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );

};

const styles = StyleSheet.create({
  
});

export default App;
