import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../assets';
import {Header} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Lupa Kata Sandi"
        onBack={() => navigation.replace('Login')}
      />
      <View style={styles.forgetPassContainer}>
        <Text style={styles.subTitleForget}>
          Masukkan email atau nomor telepon anda untuk memperbaiki masalah
        </Text>
        <View style={styles.emailPhoneContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.emailContainer}>
              <Text style={styles.titleEmail}>Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.phoneContainer}>
              <Text style={styles.titlePhone}>No.Phone</Text>
            </View>
          </TouchableOpacity>
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
  emailPhoneContainer: {
    marginTop: 50,
  },
  emailContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9C1C21',
    width: '100%',
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleEmail: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
  },
  phoneContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9C1C21',
    width: '100%',
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  titlePhone: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
  },
});
