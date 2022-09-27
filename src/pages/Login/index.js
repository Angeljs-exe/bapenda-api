import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fonts, LgApple, LgGoogle, LgPhone} from '../../assets';
import {Button, CheckBoxx, Password, TextInput} from '../../components';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../../firebase-config';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const submitLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        userCredential.user;
        navigation.replace('Dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.titleWelcomeContainer}>
        <Text style={styles.textWelcome}>Hai, Selamat Datang! 👋</Text>
        <Text style={styles.subText}>
          Silahkan masuk dengan akun yang sudah anda buat
        </Text>
        <View style={styles.wrapperContent}>
          <TextInput
            title={'Email atau No.Telepon'}
            placeholder={'Masukan email anda'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Password
            title={'Kata Sandi'}
            placeholder={'Masukkan kata sandi'}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.checkBoxContainer}>
            <CheckBoxx />
            <View style={styles.forgetPassContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.replace('ForgetPassword')}>
                <Text style={styles.titleForgetPass}>Lupa Kata Sandi</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button title={'Masuk'} onPress={submitLogin} />
        </View>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.titleOr}>Atau</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Otp')}>
          <View style={styles.signInContainer}>
            <View style={styles.wrapperSignIn}>
              <LgPhone />
              <Text style={styles.titleSignIn}>Masuk dengan nomor telepon</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.signInContainer}>
            <View style={styles.wrapperSignIn}>
              <LgGoogle />
              <Text style={styles.titleSignIn}>Masuk Dengan Google</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.signInContainer}>
            <View style={styles.wrapperSignIn}>
              <LgApple />
              <Text style={styles.titleSignIn}>Masuk Dengan Apple</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.wrapperDaftarContainer}>
          <Text style={styles.wrapperDaftar}>Belum memiliki akun?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.replace('SignUp')}>
            <Text style={styles.textDaftar}> Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleWelcomeContainer: {
    paddingVertical: 60,
    paddingHorizontal: 25,
  },
  textWelcome: {
    fontSize: 17,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
  },
  subText: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#9E9E9E',
  },
  wrapperContent: {
    marginTop: 40,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
  },
  titleForgetPass: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    textDecorationLine: 'underline',
    color: '#3F96CD',
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
    marginTop: 130 / 2,
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
