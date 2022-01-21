import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Cart({navigation}) {
  return (
    <View>
      <View style={{padding: 10, display: 'flex', flexDirection: 'row',alignItems:'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}>
          <Ionicons name="chevron-back" color={'#ff5621'} size={30} />
        </TouchableOpacity>
        <View>
          <Text style={styles.cartHeading}>Cart</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cartHeading:{
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: '#102A68',
    paddingLeft: Dimensions.get('window').width * 0.3,

  }
});
