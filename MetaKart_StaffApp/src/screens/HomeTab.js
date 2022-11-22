import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import Orders from './Orders';
import Home from './Home';
import PreviousOrders from './previousOrders';
import DeliverOrders from './deliver';



const Tab = createMaterialTopTabNavigator();


const HomeTab = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen name="Dashboard" component={Home}  /> */}
            <Tab.Screen name="Current" component={Orders} />
            <Tab.Screen name="Previous" component={PreviousOrders} />
            <Tab.Screen name="Delivered" component={DeliverOrders} />
        </Tab.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({})