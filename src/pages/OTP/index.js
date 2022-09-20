import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts} from '../../assets';
import InputOTP from './InputOTP';
import {Button} from '../../components';

const Otp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.phoneContainer}>
        <Text style={styles.numberPhone}>+6281234567899</Text>
        <View style={styles.titleOTPContainer}>
          <Text style={styles.subTitle}>
            Masukkan 5-digit kode OTP yang telah dikirim pada SMS untuk
            melengkapi registrasi akun anda
          </Text>
        </View>
      </View>
      <View style={styles.inputOtpContainer}>
        <InputOTP />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Konfrimasi'}
          onPress={() => navigation.replace('Dashboard')}
        />
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
  inputOtpContainer: {
    paddingHorizontal: 27,
    marginTop: 50,
  },
  buttonContainer: {
    paddingHorizontal: 27,
  },
});
