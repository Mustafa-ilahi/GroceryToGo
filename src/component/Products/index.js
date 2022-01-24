import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Products({navigation}) {
  const [product1, setProduct1] = useState(0);
  const [product2, setProduct2] = useState(0);
  const incrementQuanityp1 = () => {
    setProduct1(product1 + 1);
  };

  const decrementQuantityp1 = () => {
    setProduct1(product1 - 1);
  };
  const incrementQuanityp2 = () => {
    setProduct2(product2 + 1);
  };

  const decrementQuantityp2 = () => {
    setProduct2(product2 - 1);
  };
  return (
    <View>
      <View style={styles.headerBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}>
          <Ionicons name="chevron-back" color={'#ff5621'} size={30} />
        </TouchableOpacity>
        <View>
          <Text style={styles.categoryHeading}>All Products</Text>
        </View>
      </View>
      <View style={styles.productView}>
        <View style={styles.firstCategory}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SelectedProduct', {
                image: require('../../assets/product1.png'),
                title: 'Strawberry',
                description:
                  'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                price: '$3.19',
              })
            }>
            <Image
              source={require('../../assets/product1.png')}
              style={styles.categoryImg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SelectedProduct', {
                image: require('../../assets/product1.png'),
                title: 'Strawberry',
                description:
                  'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                price: '$3.19',
              })
            }>
            <Text style={styles.categoryText}>Strawberry</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SelectedProduct', {
                image: require('../../assets/product1.png'),
                title: 'Strawberry',
                description:
                  'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                price: '$3.19',
              })
            }>
            <Text style={styles.productPrice}>$3.19</Text>
          </TouchableOpacity>

          {product1 !== 0 ? (
            <>
              <View style={styles.quantityView}>
                <View>
                  <TouchableOpacity
                    style={styles.decreaseQuantity}
                    onPress={decrementQuantityp1}>
                    <Text style={styles.decreaseBtn}>-</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.quantity}>{product1}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.addToCartQuantity}
                    onPress={incrementQuanityp1}>
                    <Text style={styles.addBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <TouchableOpacity
              style={styles.addToCart}
              onPress={() => setProduct1(1)}>
              <Text style={styles.addBtn}>+</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.secondCategory}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SelectedProduct', {
                image: require('../../assets/veg2.png'),
                title: 'Broccoli',
                description:
                  'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                price: '$2.35',
              })
            }>
            <Image
              source={require('../../assets/veg2.png')}
              style={styles.categoryImg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SelectedProduct', {
                image: require('../../assets/veg2.png'),
                title: 'Broccoli',
                description:
                  'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                price: '$2.35',
              })
            }>
            <Text style={styles.categoryText}>Broccoli</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SelectedProduct', {
                image: require('../../assets/veg2.png'),
                title: 'Broccoli',
                description:
                  'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
                price: '$2.35',
              })
            }>
            <Text style={styles.productPrice}>$2.35</Text>
          </TouchableOpacity>
          {product2 !== 0 ? (
            <>
              <View style={styles.quantityView}>
                <View>
                  <TouchableOpacity
                    style={styles.decreaseQuantity}
                    onPress={decrementQuantityp2}>
                    <Text style={styles.decreaseBtn}>-</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.quantity}>{product2}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.addToCartQuantity}
                    onPress={incrementQuanityp2}>
                    <Text style={styles.addBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <TouchableOpacity
              style={styles.addToCart}
              onPress={() => setProduct2(1)}>
              <Text style={styles.addBtn}>+</Text>
            </TouchableOpacity>
          )}
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
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#102A68',
    alignItems: 'center',
    paddingLeft: Dimensions.get('window').width * 0.19,
  },
  productView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: Dimensions.get('window').height * 0.02,
  },
  firstCategory: {
    backgroundColor: '#f5f5f5',
    borderColor: '#A9A9A9',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 10,
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.45,
    borderRadius: 10,
    justifyContent: 'center',
  },
  categoryImg: {
    height: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').width * 0.3,
    alignSelf: 'center',
  },
  categoryText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#102A68',
    textAlign: 'center',
  },
  secondCategory: {
    backgroundColor: '#f5f5f5',
    borderColor: '#A9A9A9',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 10,
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.45,
    borderRadius: 10,
    justifyContent: 'center',
  },
  productPrice: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#ff5621',
    paddingLeft: Dimensions.get('window').width * 0.08,
  },
  addToCart: {
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'flex-end',
    backgroundColor: '#102A68',
    height: Dimensions.get('window').height * 0.054,
    width: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    borderTopLeftRadius: 10,
  },
  addToCartQuantity: {
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'flex-end',
    backgroundColor: '#102A68',
    height: Dimensions.get('window').height * 0.054,
    width: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    borderTopLeftRadius: 10,
  },
  decreaseQuantity: {
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: '#102A68',
    height: Dimensions.get('window').height * 0.054,
    width: Dimensions.get('window').width * 0.1,
    borderTopRightRadius: 10,
  },

  addBtn: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  decreaseBtn: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  quantity: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingLeft: Dimensions.get('window').width * 0.01,
    paddingRight: Dimensions.get('window').width * 0.01,
    color: '#ff5621',
  },
  quantityView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
