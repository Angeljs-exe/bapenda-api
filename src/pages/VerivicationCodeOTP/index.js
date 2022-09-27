import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {fonts} from '../../assets';
import InputOTP from '../OTP/InputOTP';

import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import {firebaseConfig} from '../../../firebase-config';
import firebase from 'firebase/compat/app';

const VerivicationCodeOTP = ({
  route: {
    params: {phoneNumber},
  },
}) => {
  const [code, setCode] = useState('');
  const [verivicationId, setVerivicationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const confirmCodeAuth = () => {
    console.log('code', code);
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verivicationId,
      code,
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode('');
        // navigation.navigate('Dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.page}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <View style={styles.phoneContainer}>
        <Text style={styles.numberPhone}>{phoneNumber}</Text>
        <View style={styles.titleOTPContainer}>
          <Text style={styles.subTitle}>
            Masukkan 6-digit kode OTP yang telah dikirim pada SMS untuk
            melengkapi registrasi akun anda
          </Text>
        </View>
      </View>
      <View>
        <InputOTP onChangeText={setCode} onPress={() => confirmCodeAuth()} />
      </View>
    </SafeAreaView>
  );
};

export default VerivicationCodeOTP;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  phoneContainer: {
    alignItems: 'center',
    paddingTop: 195,
  },
  numberPhone: {
    fontSize: 30,
    fontFamily: fonts.Poppins.semibold,
    color: '#000000',
  },
  titleOTPContainer: {
    paddingHorizontal: 25,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#999EA1',
    width: 364,
    textAlign: 'center',
  },
});
