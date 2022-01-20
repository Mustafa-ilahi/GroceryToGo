import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
// import '@react-native-firebase/auth';
// import storage from '@react-native-firebase/storage';
// import '@react-native-firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyCOaKRYoD2oqzElPVehFneH3CXE0y3Jml4',
  authDomain: 'groceriestogo-2cb24.firebaseapp.com',
  projectId: 'groceriestogo-2cb24',
  storageBucket: 'groceriestogo-2cb24.appspot.com',
  messagingSenderId: '974579173315',
  appId: '1:974579173315:web:e6a6d1e0d907baa4ce5f76',
  measurementId: 'G-Z89Q7VXQTN',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const storage = firebase.storage();
export {firebaseConfig};

export default () => {
  return {firebase, auth};
};
