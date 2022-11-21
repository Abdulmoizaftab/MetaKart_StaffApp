import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const Home = () => {
    const navigate = useNavigation()
  return (
    <View>
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={()=>navigate.navigate("HomeTab")}><Text>Go To tabs</Text></TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})