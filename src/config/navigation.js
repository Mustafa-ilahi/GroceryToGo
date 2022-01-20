import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSelector} from 'react-redux';
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import Home from '../component/Home';
import Dashboard from '../component/Dashboard';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const isSignedIn = useSelector(state => state.email);
  console.log(isSignedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            {/* <Stack.Screen name="TimePicker" component={TimePicker} /> */}
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
