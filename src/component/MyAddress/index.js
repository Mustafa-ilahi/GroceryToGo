import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MyAddress({navigation}) {
  return (
    <View>
      <View style={styles.headerBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Ionicons name="chevron-back" color={'#ff5621'} size={30} />
        </TouchableOpacity>
        <View>
          <Text style={styles.categoryHeading}>My Address</Text>
        </View>
      </View>
      <View style={styles.noRecordView}>
        <Image source={require('../../assets/address.png')} />
        <Text style={styles.noAddressText}>No address record!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBtn: {
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingLeft: Dimensions.get('window').height * 0.04,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryHeading: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#102A68',
    alignItems: 'center',
    paddingLeft: Dimensions.get('window').width * 0.19,
  },
  noAddressText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#ff5621',
    alignItems: 'center',
  },
  noRecordView: {
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.2,
  },
});
