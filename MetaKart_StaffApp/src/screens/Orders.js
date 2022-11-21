import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const Orders = () => {
  const navigate = useNavigation()
  return (
    <View>
      <Text>Orders</Text>
      <TouchableOpacity onPress={()=>navigate.navigate("ViewDetails")}><Text>Go To View details</Text></TouchableOpacity>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})