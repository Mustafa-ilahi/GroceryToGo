import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function SelectedProduct({navigation, route}) {
  console.log(route.params.image);
  const title = route.params.title;
  const description = route.params.description;
  const price = route.params.price;
  const img = route.params.image;
  return (
    <View>
      <View style={styles.headerBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Product');
          }}>
          <Ionicons name="chevron-back" color={'#ff5621'} size={30} />
        </TouchableOpacity>
        <View>
          <Text style={styles.categoryHeading}>{title}</Text>
        </View>
      </View>
      <View style={styles.productView}>
        <Image source={img} style={styles.productImg} />
        <Text style={styles.descriptionHeading}>Description</Text>

        <Text style={styles.productDescription}>{description}</Text>
        <Text style={styles.descriptionHeading}>Price</Text>
        <Text style={styles.productPrice}>{price}</Text>
        <View style={styles.createBtnView}>
          <TouchableOpacity style={styles.addToCart}>
            <Text>
              <Fontisto name="shopping-basket-add" color={'#fff'} size={20} />
            </Text>
            <Text style={styles.createBtnText}>Add to cart </Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    color: '#102A68',
    paddingLeft: Dimensions.get('window').width * 0.15,
    paddingTop: Dimensions.get('window').height * 0.01,
  },
  productView: {
    alignSelf: 'center',
    padding: Dimensions.get('window').width * 0.05,
  },
  productImg: {
    height: Dimensions.get('window').height * 0.43,
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
  },
  descriptionHeading: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    color: '#ff5621',
  },
  productDescription: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#102A68',
  },
  productPrice: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    color: '#102A68',
  },
  createBtnView: {
    // marginTop: Dimensions.get('window').height * 0.1,
    backgroundColor: '#ff5621',
    width: Dimensions.get('window').width * 0.9,
    padding: Dimensions.get('window').height * 0.02,
    borderRadius: 10,
    display: 'flex',
  },
  createBtnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
},
  addToCart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
