import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Header} from '../../components';
import {fonts, IconAddVehicleVehicle} from '../../assets';
import axios from 'axios';
import {storeData, useForm} from '../../utils';

const AddVehicle = ({navigation}) => {
  const [myValue, setMyValue] = useState('');
  const [form, setForm] = useForm({
    NomorMesin: '',
    TahunBuat: '',
    TipeKendaraan: '',
    NRKB: '',
    JTPajak: '',
  });

  const searchData = () => {
    axios
      .post('http://bapenda.sulutprov.go.id/derrpa/asmp22/_reminder.php', {
        ws_id: 'rmdrBapenda',
        ws_ps: '2pxtylswpq09wmmr8ixosl',

        na: `${myValue.split(' ')[0]}`,
        nb: `${myValue.split(' ')[1]}`,
        nc: `${myValue.split(' ')[2]}`,
      })
      .then(resp => {
        console.log('RESPONSE', resp);
        const myRepo = resp.data;
        setForm(myRepo);
        if (myRepo.Status == 0) {
          navigation.navigate('RegisError');
        } else if (myRepo.Status == 1) {
          const data = {
            NomorMesin: myRepo.NomorMesin,
            TahunBuat: myRepo.TahunBuat,
            TipeKendaraan: myRepo.TipeKendaraan,
            NRKB: myRepo.NRKB,
            JTPajak: myRepo.JTPajak,
          };
          storeData('user', data);
          navigation.navigate('InputVehicle');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          style={[styles.inputText]}
          placeholder="Masukan nomor rangka kendaraan"
          placeholderTextColor="#D9D9D9"
          value={myValue}
          //prettier-ignore
          onChangeText={(value) => setMyValue(value)}
          maxLength={10}
        />
        <View style={styles.buttonAddVehicle}>
          <Button title="Selanjutnya" onPress={() => searchData()} />
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
    textTransform: 'uppercase',
    color: '#242424',
  },
  buttonAddVehicle: {
    marginTop: 62.5,
  },
});
