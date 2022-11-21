import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Orders from './Orders';
import Home from './Home';

const Tab = createMaterialTopTabNavigator();


const HomeTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Orders" component={Orders} />
        </Tab.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({})