import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ViewDetails = () => {
  return (
    <View style={Style.main}>
      {/* top container */}
      <View style={Style.top_container}>
        <View style={Style.top_container_views}>
          <Text style={Style.top_container_views_text_user}>
            <FontAwesome
              name="user"
              style={Style.top_container_views_text_user}
            />
            &nbsp;John Doe
          </Text>
          <Text style={Style.top_container_views_text_pending}>Pending</Text>
        </View>
        <View style={Style.top_container_views}>
          <Text style={Style.top_container_views_text}>#00034578349</Text>
          <Text style={Style.top_container_views_text}>2 days ago</Text>
        </View>
        <View style={Style.top_container_views}>
          <Text style={Style.top_container_views_text}>Quantity</Text>
          <Text style={Style.top_container_views_text}>x2</Text>
        </View>
      </View>
      {/* 2nd container */}
      <View style={Style.second_container}>
        <View style={Style.second_container_views}>
          <Entypo name="box" style={Style.second_container_views_icons_text} />
          <Text style={Style.second_container_views_icons_text}>
            &nbsp;Product :{' '}
          </Text>
          <Text style={Style.second_container_views_icons_text2}>
            Name of the product
          </Text>
        </View>
        <View style={Style.second_container_views}>
          <MaterialIcons
            name="attach-money"
            style={Style.second_container_views_icons_text}
          />
          <Text style={Style.second_container_views_icons_text}>
            &nbsp;Price :{' '}
          </Text>
          <Text style={Style.second_container_views_icons_text2}>200.00</Text>
        </View>
        <View style={Style.second_container_views}>
          <MaterialIcons
            name="home"
            style={Style.second_container_views_icons_text}
          />
          <Text style={Style.second_container_views_icons_text}>
            &nbsp;Address :{' '}
          </Text>
          <Text style={Style.second_container_views_icons_text2}>
            House no 66/9 Gulshan e Iqbal 13-D, Karachi.
          </Text>
        </View>
        <View style={Style.second_container_views}>
          <MaterialIcons
            name="phone"
            style={Style.second_container_views_icons_text}
          />
          <Text style={Style.second_container_views_icons_text}>
            &nbsp;Contact :{' '}
          </Text>
          <Text style={Style.second_container_views_icons_text2}>
            03162784563
          </Text>
        </View>
        <View style={Style.second_container_views}>
          <MaterialIcons
            name="payment"
            style={Style.second_container_views_icons_text}
          />
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
            &nbsp;Payment :{' '}
          </Text>
          <Text style={Style.second_container_views_icons_text2}>
            Cash On Delivery
          </Text>
        </View>
        <View style={Style.second_container_views}>
          <MaterialIcons
            name="notifications"
            style={Style.second_container_views_icons_text}
          />
          <Text style={Style.second_container_views_icons_text}>
            &nbsp;Payment Status :{' '}
          </Text>
          <Text style={Style.second_container_views_icons_text2}>UnPaid</Text>
        </View>
        <View style={Style.second_container_views}>
          <MaterialIcons
            name="local-shipping"
            style={Style.second_container_views_icons_text}
          />
          <Text style={Style.second_container_views_icons_text}>
            &nbsp;Shipping Method :{' '}
          </Text>
          <Text style={Style.second_container_views_icons_text2}>
            Store Pickup
          </Text>
        </View>
        <View style={Style.second_container_views}>
          <MaterialIcons
            name="inventory"
            style={Style.second_container_views_icons_text}
          />
          <Text style={Style.second_container_views_icons_text}>
            &nbsp;Stock :{' '}
          </Text>
          <Text style={Style.second_container_views_icons_text2_stock}>
            InStock
          </Text>
        </View>
      </View>

      <View style={Style.send_btn_view}>
        <TouchableOpacity activeOpacity={0.8} style={Style.send_btn}>
          <Text style={Style.send_btn_text}>Send to admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  send_btn_view: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '8.5%',
  },
  send_btn: {
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A56E9',
    borderColor: '#5A56E9',
  },
  send_btn_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  second_container: {
    margin: '2%',
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  second_container_views: {
    flexDirection: 'row',
    margin: '2%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  second_container_views_icons_text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  second_container_views_icons_text2: {
    color: 'black',
  },
  second_container_views_icons_text2_stock: {
    backgroundColor: '#3ab030',
    padding: 5,
    borderRadius: 15,
    color: '#fff',
    letterSpacing: 2,
    width: '25%',
    textAlign: 'center',
  },
  top_container: {
    margin: '2%',
    borderRadius: 5,
    backgroundColor: '#6e6d6d',
  },
  top_container_views: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '2%',
  },
  top_container_views_text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  top_container_views_text_user: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  top_container_views_text_pending: {
    fontSize: 12,
    backgroundColor: '#f0682e',
    padding: 5,
    borderRadius: 15,
    color: '#fff',
    letterSpacing: 2,
    width: '25%',
    textAlign: 'center',
  },
});

export default ViewDetails;
