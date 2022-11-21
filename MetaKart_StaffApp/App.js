import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import React , {useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from './src/screens/HomeTab';
import SplashScreen from 'react-native-splash-screen';


const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
