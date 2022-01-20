import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Home from './src/component/Home';
import SignIn from './src/component/SignIn';
import SignUp from './src/component/SignUp';
import {Provider} from 'react-redux';
import store from './src/store';
import {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigator from './src/config/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </PersistGate>
    </Provider>
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
