import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Solution of searching from 2022</Text>
      <Text style={styles.heading}>
        All that you need, All that you want just here at all!
      </Text>
      <Image source={require('../../assets/logo2.png')} style={styles.img} />
      <View style={styles.createBtnView}>
        <TouchableOpacity>
          <Text style={styles.createBtnText}>Create an account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signinView}>
        <TouchableOpacity>
          <Text style={styles.siginText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: Dimensions.get('window').height * 0.03}}>
        <Text style={styles.footerText}>
          By proceeding, I accept the{' '}
          <Text style={{fontWeight: 'bold'}}>GroceriesToGo Service</Text> and
          confirm that I have read{' '}
          <Text style={{fontWeight: 'bold'}}>Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    paddingTop: Dimensions.get('window').height * 0.04,
    color: '#102A68',
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 36,
    color: '#102A68',
    paddingTop: Dimensions.get('window').height * 0.02,
    textAlign: 'center',
  },
  img: {marginTop: Dimensions.get('window').height * 0.05},
  createBtnView: {
    marginTop: Dimensions.get('window').height * 0.1,
    backgroundColor: '#ff5621',
    width: Dimensions.get('window').width * 0.9,
    padding: Dimensions.get('window').height * 0.02,
    borderRadius: 10,
  },
  createBtnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  signinView: {
    marginTop: Dimensions.get('window').height * 0.02,
    backgroundColor: '#102A68',
    width: Dimensions.get('window').width * 0.9,
    padding: Dimensions.get('window').height * 0.02,
    borderRadius: 10,
  },
  siginText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    fontSize: 14,
  },
});
