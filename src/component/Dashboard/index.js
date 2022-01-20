import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeData} from '../../store/action';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(removeData());
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 2000);
  };
  return (
    <View>
      <Text>Dashboard here!</Text>
      <Button title="signout" onPress={signOut} />
    </View>
  );
}
