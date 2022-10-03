import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Header} from '../../components';
import {fonts, IconAddVehicleVehicle} from '../../assets';
import axios from 'axios';

const AddVehicle = ({navigation}) => {
  const [myValue, setMyValue] = useState('');
  const [searchValue, setSearchValue] = useState([]);

  const searchData = async () => {
    await setSearchValue(myValue.split(' '));

    // axios
    //   .get('http://bapenda.sulutprov.go.id/derrpa/asmp22/_reminder.php', {
    //     ws_id: 'rmdrBapenda',
    //     ws_ps: '2pxtylswpq09wmmr8ixosl',
    //     na: `${searchValue[0]}`,
    //     nb: `${searchValue[1]}`,
    //     nc: `${searchValue[2]}`,
    //   })
    //   .then(function (response) {
    //     console.log('resp', response);
    //   })
    //   .catch(function (error) {
    //     console.log('err', error);
    //   });

    axios
      .post('http://bapenda.sulutprov.go.id/derrpa/asmp22/_reminder.php', {
        ws_id: 'rmdrBapenda',
        ws_ps: '2pxtylswpq09wmmr8ixosl',
        // na: `${searchValue[0]}`,
        // nb: `${searchValue[1]}`,
        // nc: `${searchValue[2]}`,
        na: `${myValue.split(' ')[0]}`,
        nb: `${myValue.split(' ')[1]}`,
        nc: `${myValue.split(' ')[2]}`,
      })
      .then(resp => {
        console.log('RESPONSE', resp);
      })
      .catch(function (error) {
        console.log(error);
      });

    //   var myHeaders = new Headers();
    //   myHeaders.append('Content-Type', 'application/json');

    //   var raw = JSON.stringify({
    //     ws_id: 'rmdrBapenda',
    //     ws_ps: '2pxtylswpq09wmmr8ixosl',
    //     na: `${searchValue[0]}`,
    //     nb: `${searchValue[1]}`,
    //     nc: `${searchValue[2]}`,
    //   });

    //   var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     // redirect: 'follow',
    //   };

    //   fetch(
    //     'http://bapenda.sulutprov.go.id/derrpa/asmp22/_reminder.php',
    //     requestOptions,
    //   )
    //     .then(result => console.log('result', result))
    //     .catch(error => console.log('error', error));
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
          style={[styles.inputText, styles.evolution]}
          placeholder="Masukan nomor rangka kendaraan"
          value={myValue}
          //prettier-ignore
          onChangeText={(value) =>setMyValue(value)}
          maxLength={10}
        />
        <Text>{JSON.stringify(myValue.split(' '))}</Text>
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
  },
  buttonAddVehicle: {
    marginTop: 62.5,
  },
});
