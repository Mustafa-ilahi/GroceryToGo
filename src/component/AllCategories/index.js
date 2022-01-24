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

export default function AllCategories() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.categoriesHeading}>Categories</Text>
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
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  categoriesHeading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#102A68',
    padding: Dimensions.get('window').width * 0.05,
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
    // marginTop: Dimensions.get('window').width * 0.03,
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
    backgroundColor: '#ccede6',
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
});
