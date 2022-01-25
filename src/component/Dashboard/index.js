import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Searchbar} from 'react-native-paper';
export default function Dashboard({navigation}) {
  const userName = useSelector(state => state.name);
  const [searchValue, setSearchValue] = useState('');
  const [imgActive, setImgActive] = useState(0);
  const images = [
    require('../../assets/b3.jpg'),
    require('../../assets/b2.jpg'),
    require('../../assets/b1.jpg'),
  ];
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hi, {userName}!</Text>
            <Text style={styles.semiHeading}>What would you buy today?</Text>
          </View>
          <View style={styles.cartIcon}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              {/* <Icon name="shopping-cart" color={'#ff5621'} size={25} /> */}
              <AntDesign name="shoppingcart" color={'#fff'} size={22} />
            </TouchableOpacity>
          </View>
        </View>

        <Searchbar
          placeholder="Search by item name"
          onChangeText={text => setSearchValue(text)}
          inputStyle={{fontFamily: 'Poppins-Regular',fontSize:16}}
          value={searchValue}
          style={styles.searchBar}
          placeholderTextColor={'#102A68'}
          iconColor="#102A68"
        />
      </View>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                resizeMode="contain"
                style={styles.wrap}
                source={item}
              />
            );
          })}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((item, index) => {
            return (
              <Text
                key={index}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                ⦿
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.categories}>
        <View style={styles.categoryView}>
          <View>
            <Text style={styles.categoriesHeading}>Categories</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AllCategories');
              }}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoriesMain}>
          <View style={styles.firstCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/grape.png')}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Fruits</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/veg2.png')}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Vegie</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.thirdCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/cheese.png')}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Dairy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fourthCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/meat.png')}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Meat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bestSeller}>
          <View style={styles.categoryView}>
            <View>
              <Text style={styles.categoriesHeading}>Our Products</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Products');
                }}>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bestSellerMainView}>
            <View style={styles.bestSellerView}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/broc.png')}
                  style={styles.sellerImg}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.saleView}>
              <Text style={styles.saleTitle}>Broccoli</Text>
              <Text style={styles.saleDescription}>
                Broccoli is a vegetable source of fiber
              </Text>
              <Text style={styles.price}>$3.19</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: '#102A68',
    padding: Dimensions.get('window').width * 0.03,
    paddingBottom: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Dimensions.get('window').width * 0.05,
    paddingBottom: 0,
  },
  cartIcon: {
    backgroundColor: 'rgb(16, 42, 104)',
    borderRadius: 120,
    marginTop: Dimensions.get('window').height * 0.01,
    padding: Dimensions.get('window').width * 0.03,
    height: Dimensions.get('window').height * 0.06,
    // width: Dimensions.get('window').width * 0.1,
  },
  semiHeading: {
    fontFamily: 'Poppins-Regular',
    paddingLeft: Dimensions.get('window').width * 0.03,
    fontSize: 16,
    color: '#ff5621',
  },
  searchBar: {
    borderColor: '#474C72',
    width: Dimensions.get('window').width * 0.9,
    marginTop: Dimensions.get('window').height * 0.01,
    marginBottom: Dimensions.get('window').height * 0.02,
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.08,
    borderRadius: 10,
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#ff5621',
  },
  dot: {
    margin: 3,
    color: '#102A68',
  },
  categories: {
    padding: Dimensions.get('window').width * 0.05,
    paddingBottom: 0,
  },
  categoryView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Dimensions.get('window').height * 0.01,
  },
  categoriesHeading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#102A68',
  },
  seeAllText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#ff5621',
  },
  categoriesMain: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  firstCategory: {
    backgroundColor: '#fde2fe',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.2,
    justifyContent: 'center',
  },
  categoryImg: {
    height: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.13,
    alignSelf: 'center',
  },
  categoryText: {textAlign: 'center', fontFamily: 'Poppins-Regular'},
  secondCategory: {
    backgroundColor: '#e5fce2',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.2,
    justifyContent: 'center',
  },
  thirdCategory: {
    backgroundColor: '#ffffe3',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.2,
    justifyContent: 'center',
  },
  fourthCategory: {
    backgroundColor: '#ffeeeb',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.2,
    justifyContent: 'center',
  },
  bestSeller: {
    paddingTop: Dimensions.get('window').height * 0.01,
  },
  bestSellerMainView: {
    backgroundColor: '#f8f8f8',
    height: Dimensions.get('window').height * 0.16,
    padding: Dimensions.get('window').width * 0.01,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: '#A9A9A9',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 2,
    borderBottomWidth: 0.6,
  },
  bestSellerView: {
    backgroundColor: '#e5fce2',
    height: Dimensions.get('window').height * 0.15,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.3,
  },
  sellerImg: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.2,
    marginLeft: Dimensions.get('window').width * 0.03,
    marginTop: Dimensions.get('window').width * 0.01,
  },
  saleView: {
    alignSelf: 'center',
    padding: Dimensions.get('window').width * 0.06,
  },
  saleTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#102A68',

  },
  saleDescription: {width: Dimensions.get('window').width * 0.5},
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    paddingTop: Dimensions.get('window').height * 0.02,
    color: '#ff5621',
  },
});
