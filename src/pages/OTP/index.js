import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts} from '../../assets';
import {Button} from '../../components';
import InputNumberPhone from '../SignUp/InputNumberPhone';
import CountryCode from '../../assets/CountryCode';

import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import {firebaseConfig} from '../../../firebase-config';
import firebase from 'firebase/compat/app';

const Otp = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'Indonesia'),
  );

  const [confirmCode, setConfirmCode] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [verivicationId, setVerivicationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  // console.log(phoneNumber);

  const sendCodeAuth = () => {
    setConfirmCode(!confirmCode);
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(() => {
        setVerivicationId();
        navigation.navigate('VerivicationCodeOTP', {phoneNumber});
      })
      .catch(error => {
        console.log(error);
      });
    setPhoneNumber('');
  };

  return (
    <SafeAreaView style={styles.page}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <View style={styles.phoneContainer}>
        <View style={styles.inputPhoneContainer}>
          <Text style={styles.textWelcome}>Hai, Selamat Datang! 👋</Text>
          <Text style={styles.subText}>
            Silahkan masuk dengan akun yang sudah anda buat
          </Text>
          <Text style={styles.titlePhone}>No Telepon</Text>
          <View style={styles.wrapperContent}>
            <TouchableOpacity style={styles.codePhoneIndo}>
              <Text style={styles.textCode}>{selectedCountry.dial_code}</Text>
            </TouchableOpacity>
            <InputNumberPhone
              title="Nomor Telepon"
              placeholder={'Masukkan Nomor Telepon Anda'}
              onChangeText={text =>
                setPhoneNumber(selectedCountry?.dial_code + text)
              }
            />
          </View>
          <Button title="Masuk" onPress={() => sendCodeAuth()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  phoneContainer: {
    marginTop: 20,
  },
  inputPhoneContainer: {
    paddingHorizontal: 25,
    marginTop: 90 / 2,
  },
  textWelcome: {
    fontSize: 17,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
  },
  subText: {
    fontSize: 10,
    fontFamily: fonts.Poppins.regular,
    color: '#9E9E9E',
    marginBottom: 40 / 2,
  },
  titlePhone: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 15,
  },
  wrapperContent: {
    flexDirection: 'row',
  },
  codePhoneIndo: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 41,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#C6C6C6',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textCode: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
  },
  buttonContainer: {
    paddingHorizontal: 25,
    marginTop: 80 / 2,
  },
});
