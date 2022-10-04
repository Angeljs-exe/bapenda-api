import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../assets';
import {Button, TextInput} from '../../components';
import InputNumberPhone from '../SignUp/InputNumberPhone';
import CountryCode from '../../assets/CountryCode';

const PersonalData = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'Indonesia'),
  );

  const [nik, setNik] = useState('');
  const [name, setName] = useState('');
  const [numberPhone, setNumberPhone] = useState('');

  // const [useData, setUseData] = useState({
  //   phoneNumber: '',
  // });

  // const [showNumber, setShowNumber] = useState(false);

  // const getShowNumber = () => {
  //   if (!showNumber) {
  //     return setShowNumber(false);
  //   } else {
  //     return setShowNumber(true);
  //   }
  // };

  // useEffect(() => {
  //   navigation.addListener('focus', () => {
  //     getDataUser();
  //   });
  // }, [navigation]);

  // const getDataUser = () => {
  //   getData('user').then(res => {
  //     // console.log('data user:', res);
  //     setUseData(res);
  //     // setShowNumber(true);
  //   });
  // };

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
          <TextInput title={'Alamat Email'} placeholder={'nama@gmail.com'} />
          <Text style={styles.titlePhone}>No Telepon</Text>
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
          <Button title={'Selanjutnya'} />
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
  titlePhone: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 15,
  },
  numberPhoneContainer: {
    backgroundColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C6C6C6',
    width: '100%',
    height: 41,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleNumberPhone: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
  },
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
