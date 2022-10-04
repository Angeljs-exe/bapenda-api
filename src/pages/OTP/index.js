import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts} from '../../assets';
import {Button} from '../../components';
import InputNumberPhone from '../SignUp/InputNumberPhone';
import CountryCode from '../../assets/CountryCode';

import auth from '@react-native-firebase/auth';
import {storeData} from '../../utils';

const Otp = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'Indonesia'),
  );

  const [phoneNumber, setPhoneNumber] = useState('');

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      confirmation;
      const data = {
        phoneNumber: phoneNumber,
      };

      storeData('user', data);
      navigation.navigate('VerificationCodeOTP', {phoneNumber, confirmation});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView style={styles.page}>
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
              placeholder={'Masukkan Nomor Telepon Anda'}
              onChangeText={text =>
                setPhoneNumber(selectedCountry?.dial_code + text)
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Masuk"
              onPress={() => {
                signInWithPhoneNumber();
              }}
            />
          </View>
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
    marginTop: 158,
  },
});
