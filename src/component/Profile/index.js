import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeData} from '../../store/action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Profile({navigation}) {
  const userName = useSelector(state => state.name);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(removeData());
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 2000);
  };
  return (
    <View>
      <View style={styles.profileIcon}>
        <View style={styles.profileView}>
          <Image
            source={require('../../assets/profile.jpeg')}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.headingView}>
          <Text style={styles.userName}>{userName} </Text>
          <TouchableOpacity>
            <FontAwesome
              name="pencil-square-o"
              color={'#ff5621'}
              size={25}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categoriesMain}>
        <View style={styles.headingView}>
          <View style={styles.firstCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/location.png')}
                style={styles.logoutImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={()=> navigation.navigate('MyAddress')}>
              <Text style={styles.iconText}>My Address</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headingView}>
          <View style={styles.secondCategory}>
            <TouchableOpacity style={styles.secondBtn}>
              <Image
                source={require('../../assets/voucher.png')}
                style={styles.voucherImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={()=> navigation.navigate('MyVoucher')}>
              <Text style={styles.iconText}>My Voucher</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headingView}>
          <View style={styles.thirdCategory}>
            <TouchableOpacity style={styles.thirdBtn}>
              <Image
                source={require('../../assets/wallet.png')}
                style={styles.walletImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={()=> navigation.navigate('Wallet')}>
              <Text style={styles.iconText}>Wallet</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headingView}>
          <View style={styles.fourthCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/logout.png')}
                style={styles.logoutImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={signOut}>
              <Text style={styles.iconText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileIcon: {alignSelf: 'center'},
  profileView: {marginTop: Dimensions.get('window').height * 0.02},
  profileImg: {
    height: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').width * 0.3,
    borderRadius: 60,
  },
  editIcon: {paddingTop: Dimensions.get('window').height * 0.015},
  userName: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    color: '#102A68',
    alignSelf: 'center',
    paddingBottom: 0,
  },
  categoriesMain: {
    paddingTop: Dimensions.get('window').height * 0.05,
  },
  firstCategory: {
    backgroundColor: '#f7fadd',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.2,
    marginBottom: Dimensions.get('window').height * 0.03,
    marginLeft: Dimensions.get('window').width * 0.03,
    justifyContent: 'center',
    paddingLeft: Dimensions.get('window').width * 0.06,
  },

  categoryImg: {
    height: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.15,
    marginLeft: Dimensions.get('window').width * 0.03,
    marginTop: Dimensions.get('window').width * 0.01,
  },
  voucherImg: {
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.17,
    marginLeft: Dimensions.get('window').width * 0.02,
  },
  walletImg: {
    height: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.15,
    marginLeft: Dimensions.get('window').width * 0.02,
    marginTop: Dimensions.get('window').width * 0.01,
  },
  logoutImg: {
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width * 0.08,
  },
  categoryText: {textAlign: 'center', fontFamily: 'Poppins-Regular'},
  secondCategory: {
    backgroundColor: '#f9e9e5',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.2,
    marginBottom: Dimensions.get('window').height * 0.03,
    marginLeft: Dimensions.get('window').width * 0.03,
  },
  secondBtn: {paddingTop: Dimensions.get('window').height * 0.01},
  thirdCategory: {
    backgroundColor: '#f9def9',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.2,
    marginBottom: Dimensions.get('window').height * 0.03,
    marginLeft: Dimensions.get('window').width * 0.03,
    justifyContent: 'center',
    paddingBottom: Dimensions.get('window').height * 0.02,
  },
  thirdBtn: {paddingTop: Dimensions.get('window').height * 0.015},
  fourthCategory: {
    backgroundColor: '#dceff8',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.2,
    marginBottom: Dimensions.get('window').height * 0.03,
    marginLeft: Dimensions.get('window').width * 0.03,
    justifyContent: 'center',
    paddingLeft: Dimensions.get('window').width * 0.06,
  },
  iconText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#102A68',
  },
  headingView: {display: 'flex', flexDirection: 'row'},
  iconView: {
    padding: Dimensions.get('window').width * 0.05,
  },
});
