import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput} from '../../components';
import {fonts, IconProfilePhoto} from '../../assets';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Edit Profile"
        onBack={() => navigation.navigate('Profile')}
      />
      <View style={styles.editProfilePhoto}>
        <IconProfilePhoto />
        <Text style={styles.changePhoto}>Ganti Foto</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput title="Nama" placeholder={''} />
        <TextInput title="Alamat Email" placeholder={''} />
        <TextInput title="Nomor Telepon" placeholder={''} />
        <TextInput title="Alamat" placeholder={''} />
        <View style={styles.button}>
          <Button title="Simpan" />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  editProfilePhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36 / 2,
  },
  changePhoto: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#B55559',
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
  button: {
    marginTop: 98.5 / 2,
  },
});
