import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'

const Home = () => {
  const navigate = useNavigation()
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageHeaderText}>Staff User 01</Text>
        <MaterialCommunityIcons name="bell" size={21} color="white" style={styles.pageHeaderIcon} />
      </View>
      <View style={styles.dashboardMain}>
        <View style={styles.dashboardHeader}>
          <Text style={styles.dashboardHeading}>Dashboard</Text>
          {/* <TouchableOpacity style={styles.navigateButton}>
            <Text style={styles.navigateButtonText}>Show Tabs</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.dasboardValues}>
          <View style={styles.orderCountBox}>
            <Text style={styles.orderCount}>6573</Text>
            <Text style={styles.orderText}>Number of Current Orders</Text>
            <Feather name="shopping-bag" size={100} color="#009FC6" style={styles.iconOrder} />
          </View>

          <View style={styles.StatsBoxesFlex}>
            <View style={styles.statsbox}>
              <View style={[styles.statsbox2, { backgroundColor: '#00A65A' }]}>
                <Text style={styles.statsboxCount}>6895436</Text>
                <Text style={styles.statsboxText}>Total Items in Section</Text>
                <Feather name="box" size={60} color="#03894C" style={styles.iconOrder} />
              </View>

              <View style={[styles.statsbox2, { backgroundColor: '#F39C11' }]}>
                <Text style={styles.statsboxCount}>5685</Text>
                <Text style={styles.statsboxText}>Number of Low Stock Products</Text>
                <MaterialCommunityIcons name="elevation-decline" size={60} color="#C68011" style={styles.iconOrder} />
              </View>
            </View>

            <View style={styles.statsbox}>
              <View style={[styles.statsbox2, { backgroundColor: '#DD4C39' }]}>
                <Text style={styles.statsboxCount}>2345</Text>
                <Text style={styles.statsboxText}>Number of Products Handed Over</Text>
                <MaterialCommunityIcons name="hand-extended-outline" size={60} color="#B73D2E" style={styles.iconOrder} />
              </View>

              <View style={[styles.statsbox2, { backgroundColor: '#E8877B' }]}>
                <Text style={styles.statsboxCount}>1256</Text>
                <Text style={styles.statsboxText}>Number of Customers</Text>
                <Octicons name="person" size={50} color="#D36659" style={styles.iconOrder} />
              </View>
            </View>

          </View>
        </View>

        <TouchableOpacity style={styles.checkoutBtn} onPress={()=>navigate.navigate("HomeTab")}>
          <Text style={styles.checkoutBtnText}>Show Orders</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  pageHeader: {
    backgroundColor: "#5a56e9",
    width: "100%",
    padding: "3%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  pageHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  pageHeaderIcon: {
    position: 'absolute',
    right: '5%'
  },
  dashboardHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    paddingVertical: '3%',
    width: '95%',
    alignSelf: 'center'
  },
  dashboardHeading: {
    fontSize: 25,
    color: "#444",
    fontWeight: '800'
  },
  navigateButtonText: {
    fontSize: 13,
    color: 'white',
    fontWeight: '600'
  },
  navigateButton: {
    backgroundColor: '#5a56e9',
    padding: "1.5%",
    borderRadius: 5
  },
  //============================================================
  dasboardValues: {
    padding: '3.5%'
  },
  orderCountBox: {
    backgroundColor: '#00C0EF',
    padding: '3%',
    marginVertical: '2%',
    height: '30%',
    borderRadius: 5,
    marginHorizontal: '1.3%'
  },
  orderCount: {
    fontSize: 28,
    fontWeight: '800',
    color: 'whitesmoke',
  },
  orderText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#eee'
  },

  statsbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statsbox2: {
    margin: '1.3%',
    borderRadius: 5,
    flex: 1,
    paddingVertical: '8%',
    paddingHorizontal: '5%'
  },
  statsboxText: {
    fontWeight: '600',
    color: '#eee',
    fontSize: 14
  },
  statsboxCount: {
    fontSize: 20,
    paddingBottom: '1.5%',
    color: 'white',
    fontWeight: '700',
  },
  iconOrder: {
    position: 'absolute',
    right: '4%',
    bottom: '1%',
    zIndex: -999,
  },
  finalCheckout: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: '0%',
    justifyContent: 'center',
    zIndex: 999,
    width: "100%"
  },
  checkoutBtn: {
    backgroundColor: '#5D59EE',
    padding: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#333'
  },
  checkoutBtnText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600'
  },
  //==================================================================================
})