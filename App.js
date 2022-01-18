import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Home from './src/component/Home';
import SignIn from './src/component/SignIn';
import SignUp from './src/component/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
});
