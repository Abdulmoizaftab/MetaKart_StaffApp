import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
const Login = () => {
    const navigate = useNavigation()
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={()=>navigate.navigate("Home")}><Text>Go To Home</Text></TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})