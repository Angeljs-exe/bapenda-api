import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Button, Header} from '../../components';
import {fonts, IconAddVehicleVehicle} from '../../assets';

const AddVehicle = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Tambah Kendaraan"
        onBack={() => navigation.navigate('Dashboard')}
      />
      <View style={styles.iconAddVehicle}>
        <IconAddVehicleVehicle />
      </View>
      <View style={styles.titleNumberContainer}>
        <Text style={styles.textNumberRangka}>
          Masukkan Nomor Rangka Kendaraan Anda.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputText, styles.evolution]}
          placeholder="Masukan nomor rangka kendaraan"
        />
        <View style={styles.buttonAddVehicle}>
          <Button
            title="Selanjutnya"
            onPress={() => navigation.replace('InputVehicle')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  iconAddVehicle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 46,
  },
  titleNumberContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  textNumberRangka: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
    width: 212,
    textAlign: 'center',
  },
  inputContainer: {
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  inputText: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C6C6C680',
    borderRadius: 8,
    height: 39,
    width: '100%',
    textAlign: 'center',
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonAddVehicle: {
    marginTop: 62.5,
  },
});
