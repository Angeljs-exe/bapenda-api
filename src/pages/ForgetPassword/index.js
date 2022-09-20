import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../assets';
import InputNumberPhone from '../SignUp/InputNumberPhone';
import {Button} from '../../components';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.forgetPassContainer}>
        <Text style={styles.titleForget}>Lupa Kata Sandi</Text>
        <Text style={styles.subTitleForget}>
          Masukkan nomor telepon anda untuk memperbaiki masalah
        </Text>
        <View style={styles.inputNumber}>
          <InputNumberPhone
            title={'Nomor Telepon'}
            placeholder={'Masukkan Nomor Telepon Anda'}
          />
        </View>
        <View style={styles.button}>
          <Button title={'Kirim'} onPress={() => navigation.navigate('Otp')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  forgetPassContainer: {
    paddingHorizontal: 25,
    paddingTop: 91 / 2,
  },
  titleForget: {
    fontSize: 24,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  subTitleForget: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#9E9E9E',
  },
  inputNumber: {
    marginTop: 35,
  },
  button: {
    marginTop: 269 / 2,
  },
});
