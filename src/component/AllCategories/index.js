import React from 'react';
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

export default function AllCategories({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerBtn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}>
            <Ionicons name="chevron-back" color={'#ff5621'} size={30} />
          </TouchableOpacity>
          <View>
            <Text style={styles.categoryHeading}>Categories</Text>
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
        </View>
        <View style={styles.categoriesMain}>
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
        <View style={styles.categoriesMain}>
          <View style={styles.fifthCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/fish.png')}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Seafood</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sixthCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/cleaning.png')}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Cleaning</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoriesMain}>
          <View style={styles.seventhCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/dessert.png')}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Dessert</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.eightCategory}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/oil.png')}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Oils</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
    alignItems: 'center',
    paddingLeft: Dimensions.get('window').width * 0.19,
  },
  categoriesMain: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 10,
  },
  firstCategory: {
    backgroundColor: '#fde2fe',
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  categoryImg: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.2,
    alignSelf: 'center',
  },
  categoryText: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#102A68',
  },
  secondCategory: {
    backgroundColor: '#e5fce2',
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  thirdCategory: {
    backgroundColor: '#ffffe3',
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  fourthCategory: {
    backgroundColor: '#ffeeeb',
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  fifthCategory: {
    backgroundColor: '#dfedeb',
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  sixthCategory: {
    backgroundColor: '#e4f0df',
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  seventhCategory: {
    backgroundColor: '#fce6e6',
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  eightCategory: {
    backgroundColor: '#f0fad4',
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 10,
    justifyContent: 'center',
  },
});
