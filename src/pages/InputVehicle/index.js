import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput} from '../../components';
import {fonts} from '../../assets';

const InputVehicle = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Tambah Kendaraan"
        onBack={() => navigation.navigate('AddVehicle')}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleDetails}>Rincian Kendaraan</Text>
        <TextInput title="NOMOR MESIN" placeholder="HGAI-7588976" />
        <TextInput title="TAHUN PEMBUATAN" placeholder="2016" />
        <TextInput title="TIPE" placeholder="HSDG" />
        <TextInput title="SERI" placeholder="HGA163" />
        <TextInput title="NOMOR POLISI" placeholder="DB 5848 C" />
        <TextInput title="MASA BERLAKU" placeholder="25 AGUSTUS 2023" />
        <Button
          title="Tambah"
          onPress={() => navigation.replace('RegisCompleted')}
        />
      </View>
    </SafeAreaView>
  );
};

export default InputVehicle;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  detailsContainer: {
    paddingHorizontal: 25,
  },
  titleDetails: {
    fontSize: 20,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 7,
  },
});
