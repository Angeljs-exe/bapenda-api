import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Header, TextInput} from '../../components';
import {fonts} from '../../assets';
import {getData} from '../../utils';

const InputVehicle = ({navigation}) => {
  const [dataVehicle, setDataVehicle] = useState({
    NomorMesin: '',
    TahunBuat: '',
    TipeKendaraan: '',
    NRKB: '',
    JTPajak: '',
  });

  const getDataVehicle = () => {
    getData('user').then(res => {
      setDataVehicle(res);
    });
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getDataVehicle();
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Tambah Kendaraan"
        onBack={() => navigation.navigate('AddVehicle')}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleDetails}>Rincian Kendaraan</Text>
        <TextInput
          title="NOMOR MESIN"
          placeholder="HGAI-7588976"
          value={dataVehicle.NomorMesin}
        />
        <TextInput
          title="TAHUN PEMBUATAN"
          placeholder="2016"
          value={dataVehicle.TahunBuat}
        />
        <TextInput
          title="TIPE"
          placeholder="HSDG"
          value={dataVehicle.TipeKendaraan}
        />
        <TextInput
          title="NOMOR POLISI"
          placeholder="DB 5848 C"
          value={dataVehicle.NRKB}
        />
        <TextInput
          title="MASA BERLAKU"
          placeholder="25 AGUSTUS 2023"
          value={dataVehicle.JTPajak}
        />
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
