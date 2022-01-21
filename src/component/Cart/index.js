import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Cart({navigation}) {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerBtn}>
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
      <ScrollView>
        <View style={styles.productBtn}>
          <View style={styles.bestSellerView}>
            <Image
              source={require('../../assets/broc.png')}
              style={styles.productImg}
            />
          </View>
          <View style={styles.productMain}>
            <View style={styles.productDetail}>
              <Text style={styles.productTitle}>Broccoli</Text>
              <Text style={styles.productPrice}>$3.19</Text>
            </View>
            {quantity !== 0 ? (
              <View style={styles.btn}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={styles.decrease}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                  <Text style={styles.increase}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.deleteIcon}>
                <TouchableOpacity>
                  <AntDesign name="delete" color={'#FF0000'} size={30} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.productBtn}>
          <View style={styles.bestSellerView}>
            <Image
              source={require('../../assets/broc.png')}
              style={styles.productImg}
            />
          </View>
          <View style={styles.productMain}>
            <View style={styles.productDetail}>
              <Text style={styles.productTitle}>Broccoli</Text>
              <Text style={styles.productPrice}>$3.19</Text>
            </View>
            {quantity !== 0 ? (
              <View style={styles.btn}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={styles.decrease}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                  <Text style={styles.increase}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.deleteIcon}>
                <TouchableOpacity>
                  <AntDesign name="delete" color={'#FF0000'} size={30} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.productBtn}>
          <View style={styles.bestSellerView}>
            <Image
              source={require('../../assets/broc.png')}
              style={styles.productImg}
            />
          </View>
          <View style={styles.productMain}>
            <View style={styles.productDetail}>
              <Text style={styles.productTitle}>Broccoli</Text>
              <Text style={styles.productPrice}>$3.19</Text>
            </View>
            {quantity !== 0 ? (
              <View style={styles.btn}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={styles.decrease}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                  <Text style={styles.increase}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.deleteIcon}>
                <TouchableOpacity>
                  <AntDesign name="delete" color={'#FF0000'} size={30} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.productBtn}>
          <View style={styles.bestSellerView}>
            <Image
              source={require('../../assets/broc.png')}
              style={styles.productImg}
            />
          </View>
          <View style={styles.productMain}>
            <View style={styles.productDetail}>
              <Text style={styles.productTitle}>Broccoli</Text>
              <Text style={styles.productPrice}>$3.19</Text>
            </View>
            {quantity !== 0 ? (
              <View style={styles.btn}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={styles.decrease}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                  <Text style={styles.increase}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.deleteIcon}>
                <TouchableOpacity>
                  <AntDesign name="delete" color={'#FF0000'} size={30} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', height: Dimensions.get('window').height},
  headerBtn: {
    paddingTop: Dimensions.get('window').height *0.01,
    paddingLeft: Dimensions.get('window').height *0.025,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartHeading: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: '#102A68',
    paddingLeft: Dimensions.get('window').width * 0.3,
  },
  productBtn: {
    backgroundColor: '#f8f8f8',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
    borderColor: '#A9A9A9',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 10,
    marginBottom: Dimensions.get('window').height * 0.02,
    marginTop: Dimensions.get('window').height * 0.01,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: Dimensions.get('window').width * 0.03,
    alignItems: 'center',
  },
  bestSellerView: {
    backgroundColor: '#e5fce2',
    height: Dimensions.get('window').height * 0.15,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.3,
  },
  productImg: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.2,
    marginLeft: Dimensions.get('window').width * 0.03,
    marginTop: Dimensions.get('window').width * 0.01,
  },

  productMain: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  productDetail: {
    alignSelf: 'center',
    padding: Dimensions.get('window').width * 0.05,
  },
  productTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#102A68',
  },
  productPrice: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    paddingTop: Dimensions.get('window').height * 0.01,
    color: '#ff5621',
  },
  btn: {display: 'flex', flexDirection: 'row'},
  decrease: {
    backgroundColor: '#102A68',
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').height * 0.006,
    marginTop: Dimensions.get('window').height * 0.055,
  },
  quantity: {
    fontFamily: 'Poppins-Regular',
    paddingTop: Dimensions.get('window').height * 0.035,
    paddingLeft: Dimensions.get('window').width * 0.03,
    fontSize: 22,
    color: '#ff5621',
  },
  increase: {
    fontFamily: 'Poppins-SemiBold',
    paddingTop: Dimensions.get('window').height * 0.025,
    paddingLeft: Dimensions.get('window').width * 0.015,
    fontSize: 30,
    color: '#102A68',
  },
  deleteIcon: {paddingLeft: Dimensions.get('window').width * 0.1},
});
