import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {storeData} from '../../store/action';
import firebase from '../../config/firebase';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';

const {auth} = firebase();

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('123456');
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

  const signIn = () => {
    setLoader(true);
    try {
      if (email !== '' && password !== '') {
        setError('');
        const signIn = auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            setLoader(false);
            let data = firestore()
              .collection('Users')
              .where('email', '==', email)
              .get()
              .then(snapshot => {
                snapshot.forEach(item => {
                  dispatch(storeData(item.data().email, item.data().userName));
                  // navigation.navigate('Dashboard');
                });
              });
          })
          .catch(error => {
            setError(error.message.split(']')[1]);
            setLoader(false);
          });
      } else if (email == '') {
        setError('*Email is required');
        setLoader(false);
      } else if (password == '') {
        setError('*Password is required');
        setLoader(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo2.png')} style={styles.img} />

      <View style={styles.signUpView}>
        <Text style={styles.welcomeBack}>Welcome Back!</Text>
        <Text style={styles.signUpText}>Sign in to your account</Text>
      </View>
      <View style={styles.form}>
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
      <View style={styles.signInBtn}>
        <TouchableOpacity onPress={signIn}>
          {loader ? (
            <ActivityIndicator animating={true} color={'#fff'} size={25} />
          ) : (
            <Text style={styles.signIn}>Sign In</Text>
          )}
        </TouchableOpacity>
      </View>
      {error !== '' && (
        <View style={styles.errorView}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      <View>
        <Text style={styles.newMember}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={styles.signUp}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
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

  signInBtn: {
    backgroundColor: '#102A68',
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: Dimensions.get('window').height * 0.02,
    marginTop: Dimensions.get('window').height * 0.03,
    height:Dimensions.get('window').height *0.08

  },
  signIn: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
  },
  newMember: {
    fontFamily: 'Poppins-Regular',
    paddingTop: Dimensions.get('window').height * 0.02,
    color: '#ff5621',
    textAlign: 'center',
  },
  signUp: {fontWeight: 'bold'},
  error: {
    color: 'red',
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: Dimensions.get('window').width * 0.06,
    fontFamily: 'Poppins-Regular',
  },
  errorView: {marginTop: Dimensions.get('window').height * 0.01},
});
