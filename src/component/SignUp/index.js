import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import firebase from '../../config/firebase';
import firestore from '@react-native-firebase/firestore';
import {storeData} from '../../store/action';
import {useDispatch} from 'react-redux';

const {auth} = firebase();

export default function SignUp({navigation}) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState('eye-off');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const showPasswordValue = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setEyeIcon('eye');
    } else {
      setEyeIcon('eye-off');
    }
  };

  const createAnAccount = async () => {
    try {
      setLoader(true);
      if (userName !== '' && email !== '' && password !== '') {
        setLoader(true);
        setError('');
        const signUp = await auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            dispatch(storeData(userName, email));
            firestore()
              .collection('Users')
              .add({
                userName,
                email,
              })
              .then(() => {
                setLoader(false);
                navigation.navigate('Dashboard');
              });
          })
          .catch(err => {
            console.log(err);
          });
      } else if (userName == '') {
        setError('*Username is required');
        setLoader(false);
      } else if (email == '') {
        setError('*Email is required');
        setLoader(false);
      } else if (password == '') {
        setError('*Password is required');
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message.split(']')[1]);
      setLoader(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/logo2.png')} style={styles.img} />

      <View style={styles.signUpView}>
        <Text style={styles.welcomeBack}>Sign up!</Text>
        <Text style={styles.signUpText}>Create an account</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Username"
          activeUnderlineColor="#102a68"
          onChangeText={text => setUserName(text)}
          value={userName}
          style={styles.userName}
          underlineColor="transparent"
        />
        <TextInput
          label="Email"
          activeUnderlineColor="#102a68"
          onChangeText={text => setEmail(text)}
          value={email}
          style={styles.email}
          underlineColor="transparent"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          activeUnderlineColor="#102a68"
          label="Password"
          secureTextEntry={showPassword}
          right={<TextInput.Icon name={eyeIcon} onPress={showPasswordValue} />}
          style={styles.password}
          underlineColor="transparent"
        />
      </View>
      <View style={styles.createAccountBtn}>
        <TouchableOpacity onPress={createAnAccount}>
          {loader ? (
            <ActivityIndicator animating={true} color={'#fff'} size={25} />
          ) : (
            <Text style={styles.createAccountBtnText}>Create an account</Text>
          )}
        </TouchableOpacity>
      </View>

      {error !== '' && (
        <View style={styles.errorView}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      <View>
        <Text style={styles.alreadyMember}>
          Already have an account?{' '}
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={styles.signin}>
            Sign in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  img: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height * 0.05,
  },
  signUpView: {
    alignSelf: 'flex-start',
    padding: Dimensions.get('window').width * 0.02,
  },
  welcomeBack: {
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
    color: '#ff5621',
    paddingLeft: Dimensions.get('window').width * 0.03,
    paddingTop: Dimensions.get('window').height * 0.03,
  },
  form: {
    width: '95%',
    alignSelf: 'center',
    padding: Dimensions.get('window').width * 0.02,
  },
  signUpText: {
    color: '#102A68',
    fontSize: 18,
    paddingLeft: Dimensions.get('window').width * 0.03,
    fontFamily: 'Poppins-Regular',
  },
  userName: {
    borderTopRadius: 12,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    fontFamily: 'Poppins-Regular',
  },
  email: {
    marginTop: Dimensions.get('window').height * 0.02,
    borderTopRadius: 12,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  password: {
    marginTop: Dimensions.get('window').height * 0.02,

    borderTopRadius: 12,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  createAccountBtn: {
    backgroundColor: '#102A68',
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: Dimensions.get('window').height * 0.02,
    marginTop: Dimensions.get('window').height * 0.01,
  },
  createAccountBtnText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
  },
  alreadyMember: {
    paddingTop: Dimensions.get('window').height * 0.02,
    color: '#ff5621',
    textAlign: 'center',
  },
  signin: {fontWeight: 'bold'},
  error: {
    color: 'red',
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: Dimensions.get('window').width * 0.06,
    fontFamily: 'Poppins-Regular',
  },
  errorView: {marginTop: Dimensions.get('window').height * 0.01},
});
