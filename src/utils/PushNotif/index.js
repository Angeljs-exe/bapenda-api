import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const PushNotif = () => {
  useEffect(() => {
    messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(token => {
        console.log('token', token);
      });
  }, []);
};

export default PushNotif;
