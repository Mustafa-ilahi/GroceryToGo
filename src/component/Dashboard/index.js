import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeData} from '../../store/action';
import Icon from 'react-native-vector-icons/Entypo';
import {Searchbar} from 'react-native-paper';

export default function Dashboard({navigation}) {
  const userName = useSelector(state => state.name);
  //   console.log(userName);
  const [searchValue, setSearchValue] = useState('');
  return (
    <ScrollView>
      <View style={styles.containter}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hi, {userName}!</Text>
            <Text style={styles.semiHeading}>What would you buy today?</Text>
          </View>
          <View style={styles.cartIcon}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon name="shopping-cart" color={'#ff5621'} size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <Searchbar
          placeholder="Search by item name"
          onChangeText={text => setSearchValue(text)}
          value={searchValue}
          style={styles.searchBar}
          placeholderTextColor={'#102A68'}
          iconColor="#102A68"
        />
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
    backgroundColor: '#102A68',
    borderRadius: 20,
    marginTop: Dimensions.get('window').height * 0.01,
    padding: Dimensions.get('window').width * 0.03,
    height: Dimensions.get('window').height * 0.07,
    borderColor: '#ff5621',
    borderWidth: 1,
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
});
