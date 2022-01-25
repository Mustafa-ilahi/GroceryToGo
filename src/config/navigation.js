import React, {Fragment, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {useSelector} from 'react-redux';
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import Home from '../component/Home';
import Dashboard from '../component/Dashboard';
import Profile from '../component/Profile';
import Cart from '../component/Cart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Product from '../component/Products';
import AllCategories from '../component/AllCategories';
import SelectedProduct from '../component/SelectedProduct';
import Wallet from '../component/Wallet';
import MyVoucher from '../component/MyVoucher';
import MyAddress from '../component/MyAddress';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function MainNavigator() {
  const isSignedIn = useSelector(state => state.email);
  console.log(isSignedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <Fragment>
            <Stack.Screen name="BottomNavs" component={MyTabs} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="AllCategories" component={AllCategories} />
            <Stack.Screen name="SelectedProduct" component={SelectedProduct} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Wallet" component={Wallet} />
            <Stack.Screen name="MyVoucher" component={MyVoucher} />
            <Stack.Screen name="MyAddress" component={MyAddress} />
          </Fragment>
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

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ff5621"
      barStyle={{backgroundColor: '#f5f5f5'}}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Product}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color}) => (
            <FontAwesome name="shopping-bag" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
