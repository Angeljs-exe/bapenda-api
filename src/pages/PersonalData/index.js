import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts} from '../../assets';
import {Button, TextInput} from '../../components';
import InputNumberPhone from '../SignUp/InputNumberPhone';
import CountryCode from '../../assets/CountryCode';
import axios from 'axios';
import {getData} from '../../utils';

const PersonalData = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'Indonesia'),
  );

  const [nik, setNik] = useState('');
  const [name, setName] = useState('');
  const [numberPhone, setNumberPhone] = useState('');

  const submitAPI = () => {
    axios
      .post('http://10.0.2.2:3000/api/posts/', {
        nama: `${name}`,
        nik: `${nik}`,
        email: `${useData.email}`,
        noTlp: `${numberPhone}`,
      })
      .then(response => {
        console.log('hehe', response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const [useData, setUseData] = useState({
    email: '',
  });

  // const [showNumber, setShowNumber] = useState(false);

  // const getShowNumber = () => {
  //   if (!showNumber) {
  //     return setShowNumber(false);
  //   } else {
  //     return setShowNumber(true);
  //   }
  // };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getDataUser();
    });
  }, [navigation]);

  const getDataUser = () => {
    getData('user').then(res => {
      setUseData(res);
    });
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.personalDataContainer}>
        <Text style={styles.titlePersonalData}>Lengkapi Data Diri Anda</Text>
        <Text style={styles.subTitlePersonalData}>
          Silahkan mengisi data anda dengan lengkap
        </Text>
        <View>
          <TextInput
            title={'NIK E-KTP'}
            placeholder={'Masukkan NIK Anda'}
            value={nik}
            onChangeText={text => setNik(text)}
          />
          <TextInput
            title={'Nama Sesuai E-KTP'}
            placeholder={'Masukkan Nama Anda'}
            value={name}
            onChangeText={text => setName(text)}
          />
          {/* <TextInput
            title={'Alamat Email'}
            placeholder={'nama@gmail.com'}
            value={email}
            onChangeText={text => setEmail(text)}
          /> */}
          <Text style={styles.textPersonalData}>Email</Text>
          <View style={styles.emailContainer}>
            <Text style={styles.titleEmail}>{useData.email}</Text>
          </View>
          <Text style={styles.textPersonalData}>No Telepon</Text>
          {/* {showNumber ? (
            <View style={styles.numberPhoneContainer}>
              <Text style={styles.titleNumberPhone}>{useData.phoneNumber}</Text>
            </View>
          ) : (
            <View style={styles.wrapperContent}>
              <TouchableOpacity style={styles.codePhoneIndo}>
                <Text style={styles.textCode}>{selectedCountry.dial_code}</Text>
              </TouchableOpacity>
              <InputNumberPhone
                placeholder={'Masukkan Nomor Telepon Anda'}
                onChangeText={text =>
                  setNumberPhone(selectedCountry?.dial_code + text)
                }
              />
            </View>
          )} */}
          {/* {showNumber && (
            <View style={styles.numberPhoneContainer}>
              <Text style={styles.titleNumberPhone}>{useData.phoneNumber}</Text>
            </View>
          )}
          {!showNumber && (
            <View style={styles.wrapperContent}>
              <TouchableOpacity style={styles.codePhoneIndo}>
                <Text style={styles.textCode}>{selectedCountry.dial_code}</Text>
              </TouchableOpacity>
              <InputNumberPhone
                placeholder={'Masukkan Nomor Telepon Anda'}
                onChangeText={text =>
                  setNumberPhone(selectedCountry?.dial_code + text)
                }
              />
            </View>
          )} */}
          <View style={styles.wrapperContent}>
            <TouchableOpacity style={styles.codePhoneIndo}>
              <Text style={styles.textCode}>{selectedCountry.dial_code}</Text>
            </TouchableOpacity>
            <InputNumberPhone
              placeholder={'Masukkan Nomor Telepon Anda'}
              onChangeText={text =>
                setNumberPhone(selectedCountry?.dial_code + text)
              }
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Selanjutnya'} onPress={() => submitAPI()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalData;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  personalDataContainer: {
    marginTop: 95 / 2,
    paddingHorizontal: 25,
  },
  titlePersonalData: {
    fontSize: 24,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  subTitlePersonalData: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#9E9E9E',
  },
  textPersonalData: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 15,
  },
  emailContainer: {
    backgroundColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C6C6C6',
    width: '100%',
    height: 41,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleEmail: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
  },
  // numberPhoneContainer: {
  //   backgroundColor: '#C6C6C6',
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   borderColor: '#C6C6C6',
  //   width: '100%',
  //   height: 41,
  //   justifyContent: 'center',
  //   paddingHorizontal: 10,
  // },
  // titleNumberPhone: {
  //   fontSize: 14,
  //   fontFamily: fonts.Poppins.medium,
  //   color: '#000000',
  // },
  wrapperContent: {
    flexDirection: 'row',
  },
  codePhoneIndo: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 41,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#C6C6C6',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textCode: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
  },
  buttonContainer: {
    marginTop: 164 / 2,
  },
});
