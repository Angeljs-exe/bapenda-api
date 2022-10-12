import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts, LgGoogle} from '../../assets';
import CountryCode from '../../assets/CountryCode';
import InputNumberPhone from '../SignUp/InputNumberPhone';
import {Button, Loading} from '../../components';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {storeData} from '../../utils';

const Login = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'Indonesia'),
  );
  const [phoneNumber, setPhoneNumber] = useState('');
  const [useData, setUseData] = useState({});
  const [loading, setLoading] = useState(false);

  const signInWithPhoneNumber = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      const data = {
        phoneNumber: phoneNumber,
      };

      storeData('user', data);
      navigation.navigate('VerificationCodeOTP', {phoneNumber, confirmation});
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  const googleSignIn = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '92751038746-eid3u1dtpf5bet826ri12lt0sd9t3d46.apps.googleusercontent.com',
    });
  }, []);
  return (
    <>
      <SafeAreaView style={styles.page}>
        <View style={styles.titleWelcomeContainer}>
          <Text style={styles.textWelcome}>Hai, Selamat Datang! 👋</Text>
          <Text style={styles.subText}>
            Silahkan masuk dengan akun yang sudah anda buat
          </Text>
          <Text style={styles.titleNumberPhone}>Nomor Telepon</Text>
          <View style={styles.wrapperContentPhoneNumber}>
            <TouchableOpacity style={styles.codePhoneIndo}>
              <Text style={styles.textCode}>{selectedCountry.dial_code}</Text>
            </TouchableOpacity>
            <InputNumberPhone
              placeholder={'Masukkan Nomor Telepon Anda'}
              onChangeText={text =>
                setPhoneNumber(selectedCountry?.dial_code + text)
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={'Masuk'}
              onPress={() => {
                signInWithPhoneNumber();
              }}
            />
          </View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.titleOr}>Atau</Text>
            <View style={styles.line} />
          </View>
        </View>
        <View style={styles.wrapperContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              googleSignIn()
                .then(google => {
                  setLoading(true);
                  setUseData(google.user.email);
                  axios
                    .post('http://10.0.2.2:3000/api/posts/', {
                      uid: `${google.user.uid}`,
                    })
                    .then(res => {
                      const googleData = res.data;
                      if (googleData) {
                        const DashboardData = {
                          name: res.data.nama,
                          nik: res.data.nik,
                          email: res.data.email,
                          phoneNumber: res.data.noTlp,
                          uid: res.data.uid,
                          id: res.data.id,
                        };
                        storeData('user', DashboardData);
                        navigation.reset({
                          index: 0,
                          routes: [{name: 'Dashboard', DashboardData}],
                        });
                      } else if (!googleData) {
                        const data = {
                          gEmail: google.user.email,
                          uid: google.user.uid,
                        };
                        // const phoneNumber = '';
                        storeData('user', data);
                        navigation.replace('PersonalData', data, {phoneNumber});
                      }
                    });
                })
                .catch(error => console.log(error))
            }>
            <View style={styles.signInContainer}>
              <View style={styles.wrapperSignIn}>
                <LgGoogle />
                <Text style={styles.titleSignIn}>Masuk Dengan Google</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.wrapperDaftarContainer}>
            <Text style={styles.wrapperDaftar}>Belum memiliki akun?</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.textDaftar}> Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleWelcomeContainer: {
    paddingHorizontal: 26,
    marginTop: 58,
  },
  textWelcome: {
    fontSize: 24,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  subText: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#9E9E9E',
  },
  titleNumberPhone: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 40,
  },
  wrapperContentPhoneNumber: {
    flexDirection: 'row',
    marginTop: 5,
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
    marginTop: 149 / 2,
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  line: {
    borderTopWidth: 0.5,
    borderColor: '#000000',
    width: 140,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  titleOr: {
    fontSize: 14,
    fontFamily: fonts.Poppins.semibold,
    color: '#999EA1',
  },
  wrapperContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
  signInContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C6C6C6',
    width: '100%',
    height: 44,
    justifyContent: 'center',
    marginTop: 15,
  },
  wrapperSignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSignIn: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginLeft: 10,
  },
  wrapperDaftarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },
  wrapperDaftar: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
  },
  textDaftar: {
    fontFamily: fonts.Poppins.semibold,
    color: '#00ADF8',
  },
});
