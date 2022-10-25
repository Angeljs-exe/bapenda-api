import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Header} from '../../components';
import {fonts} from '../../assets';
import {getData} from '../../utils';
import axios from 'axios';
import {baseUrl} from '../../utils/config';

const InputVehicle = ({navigation}) => {
  const [dataVehicle, setDataVehicle] = useState({
    NomorMesin: '',
    TahunBuat: '',
    TipeKendaraan: '',
    NRKB: '',
    JTPajak: '',
    KodeBayar: '',
    NamaPemilik: '',
    JenisKendaraan: '',
    NomorRangka: '',
  });
  const [numberRangka, setNumberRangka] = useState(0);

  let noRangka = dataVehicle.NomorRangka;
  let getSixNumber = noRangka.slice(11, 17);

  const getDataVehicle = () => {
    getData('userVehicle').then(res => {
      setDataVehicle(res);
    });
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getDataVehicle();
    });
  }, [navigation]);

  const insertVehicle = () => {
    if (getSixNumber == numberRangka) {
      getData('user').then(res => {
        axios
          .post(`${baseUrl}/api/posts/vehicle/${res.id}`, {
            NomorMesin: dataVehicle.NomorMesin,
            TahunBuat: dataVehicle.TahunBuat,
            TipeKendaraan: dataVehicle.TipeKendaraan,
            NRKB: dataVehicle.NRKB,
            JTPajak: dataVehicle.JTPajak,
            KodeBayar: dataVehicle.KodeBayar,
          })
          .then(() => {
            navigation.replace('RegisCompleted');
          })
          .catch(error => {
            console.log(error);
          });
      });
    } else {
      Alert.alert('Maaf nomor rangka yang anda masukan salah');
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Tambah Kendaraan"
        onBack={() => navigation.navigate('AddVehicle')}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleDetails}>Apakah data ini sesuai?</Text>
        <View style={styles.dataOwnerContainer}>
          <Text style={styles.titleContainer}>NAMA PEMILIK</Text>
          <Text style={styles.subTitleOwnerName} numberOfLines={1}>
            {dataVehicle?.NamaPemilik}
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.dataOwnerContainer}>
          <Text style={styles.titleContainer}>JENIS KENDARAAN</Text>
          <Text style={styles.subTitle}>{dataVehicle?.JenisKendaraan}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.dataOwnerContainer}>
          <Text style={styles.titleContainer}>NOMOR POLISI</Text>
          <Text style={styles.subTitle}>{`${
            dataVehicle?.NRKB.match(/[a-zA-Z]+/g)?.[0]
          } ${dataVehicle?.NRKB.match(/\d+/g)} ${
            dataVehicle?.NRKB.match(/[a-zA-Z]+/g)?.[1]
          }`}</Text>
        </View>
        <View style={styles.line} />
        <Text style={styles.titleNotice}>
          *Apabila benar lengkapi data dibawah ini.
        </Text>
        <View style={styles.chassisNumberContainer}>
          <View style={styles.wrapperChassisNumber}>
            <Text style={styles.titleChassisNumber}>
              Masukkan Nomor Rangka Anda
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="6 digit terakhir nomor rangka"
              placeholderTextColor="#9E9E9E"
              value={numberRangka}
              maxLength={6}
              keyboardType="number-pad"
              onChangeText={value => setNumberRangka(value)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Konfirmasi" onPress={() => insertVehicle()} />
        </View>
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
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 7,
    marginBottom: 40,
  },
  dataOwnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    borderWidth: 2,
    borderColor: '#D9D9D940',
    marginTop: 15,
    marginBottom: 15,
  },
  titleContainer: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#242424',
  },
  subTitleOwnerName: {
    fontSize: 14,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
    width: 100,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  titleNotice: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#00ADF8',
  },
  chassisNumberContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C6C6C6D9',
    width: '100%',
    height: 128,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 65 / 2,
  },
  wrapperChassisNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleChassisNumber: {
    fontSize: 14,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  textInputContainer: {
    paddingHorizontal: 32,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#C6C6C6D9',
    borderRadius: 10,
    color: '#242424',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 238 / 2,
  },
});
