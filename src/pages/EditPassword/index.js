import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Header, Password} from '../../components';
import {fonts} from '../../assets';

const EditPassword = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Kata Sandi"
        onBack={() => navigation.navigate('Profile')}
      />
      <View style={styles.passwordContainer}>
        <Password title="Kata Sandi Saat Ini" />
        <Password title="Kata Sandi Baru" />
        <Password title="Konfirmasi Kata Sandi Baru" />
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.titleForget}>Lupa Kata Sandi</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button title="Simpan" />
        </View>
      </View>
    </View>
  );
};

export default EditPassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    paddingHorizontal: 25,
    paddingTop: 52 / 4,
  },
  titleForget: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#3F96CD',
    textDecorationLine: 'underline',
    marginTop: 12,
  },
  button: {
    marginTop: 372 / 2,
  },
});
