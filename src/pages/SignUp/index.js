import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fonts} from '../../assets';
import {Button, Password, TextInput} from '../../components';
import InputNumberPhone from './InputNumberPhone';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleRegisContainer}>
          <Text style={styles.textRegis}>Daftarkan Akun Anda</Text>
          <Text style={styles.subTextRegis}>
            Silahkan mengisi data anda dengan lengkap
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            title={'NIK E-KTP'}
            placeholder={'Masukkan NIK E-KTP Anda '}
          />
          <TextInput
            title={'Nama Sesuai E-KTP'}
            placeholder={'Masukkan Nama Anda'}
          />
          <TextInput
            title={'Alamat Email​ '}
            placeholder={'Masukkan Alamat Email Anda'}
          />
          <InputNumberPhone
            title={'Nomor Telepon'}
            placeholder={'Masukkan Nomor Telepon Anda'}
          />
          <Password
            title={'Password'}
            placeholder={'Masukkan Kata Sandi Anda'}
          />
          <Button
            title={'Selanjutnya'}
            onPress={() => navigation.replace('Otp')}
          />
        </View>
        <View style={styles.wrapperDoneContainer}>
          <Text style={styles.wrapperDone}>Sudah memiliki akun?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.replace('Login')}>
            <Text style={styles.textLogin}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleRegisContainer: {
    marginTop: 60,
    paddingHorizontal: 25,
  },
  textRegis: {
    fontSize: 24,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  subTextRegis: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#9E9E9E',
  },
  inputContainer: {
    paddingHorizontal: 25,
    marginTop: 40,
  },
  wrapperDoneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60,
  },
  wrapperDone: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#2E2E2E',
  },
  textLogin: {
    fontFamily: fonts.Poppins.semibold,
    color: '#00ADF8',
  },
});
