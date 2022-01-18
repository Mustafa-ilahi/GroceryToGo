import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
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
          // secureTextEntry={showPassword}
          // right={<TextInput.Icon name={eyeIcon}
          // onPress={showPasswordValue}
          // />}
          style={styles.password}
          underlineColor="transparent"
        />
      </View>
      <View style={styles.createAccountBtn}>
        <TouchableOpacity
        //   onPress={createAnAccount}
        >
          {/* {loader ? (
              <ActivityIndicator animating={true} color={'#fff'} />
            ) : ( */}
          <Text style={styles.createAccountBtnText}>Create an account</Text>
          {/* )} */}
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.alreadyMember}>
          Already have an account?{' '}
          <Text
            // onPress={() => navigation.navigate('SignIn')}
            style={styles.signin}>
            Sign in
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
    marginTop:30
  },
  signUpView: {alignSelf: 'flex-start', padding: 10},
  welcomeBack: {
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
    color: '#ff5621',
    paddingLeft: 7,
    paddingTop:20
  },
  form: {
    width: '95%',
    alignSelf: 'flex-start',
    paddingLeft: 15,
  },
  signUpText: {
    color: '#102A68',
    // paddingTop: 10,
    fontSize: 18,
    paddingLeft: 7,
    fontFamily: 'Poppins-Regular',
  },
  userName: {
    borderTopRadius: 12,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    fontFamily: 'Poppins-Regular',
  },
  email: {
    marginTop: 20,
    borderTopRadius: 12,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  passwordText: {
    paddingTop: 20,
  },
  password: {
    marginTop: 20,
    borderTopRadius: 12,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  createAccountBtn: {
    backgroundColor: '#102A68',
    width: 330,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  createAccountBtnText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
  },
  alreadyMember: {
    paddingTop: 10,
    color: '#ff5621',
    textAlign:"center",
  },
  signin: {fontWeight: 'bold'},
});
