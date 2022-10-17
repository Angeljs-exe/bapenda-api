import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  fonts,
  LgBapenda,
  LgBSG,
  LgFIK,
  LgJasaRaharja,
  LgProvinsiSulut,
  LgSatlantas,
  LgUnklab,
} from '../../assets';

import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {
  const rnFirebasePersistent = () => {
    const subscriber = auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('Dashboard');
        } else if (!user) {
          navigation.reset({index: 0, routes: [{name: 'Login'}]});
        }
      }, 0);
    });
    return () => subscriber();
  };

  useEffect(() => {
    rnFirebasePersistent();
    // navigation.navigate('Login');
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.screenContainer}>
        <Image source={LgProvinsiSulut} />
        <View style={styles.partnerLogo}>
          <Image source={LgBapenda} />
          <Image source={LgJasaRaharja} style={styles.logo} />
          <Image source={LgSatlantas} style={styles.logo} />
          <Image source={LgBSG} style={styles.logo} />
        </View>
        <View style={styles.supportedContainer}>
          <Text style={styles.titleSplashScreen}>supported by</Text>
          <View style={styles.supportedLogo}>
            <Image source={LgFIK} />
            <Image source={LgUnklab} style={styles.logoSupported} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partnerLogo: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 76,
  },
  logo: {
    marginLeft: 20,
  },
  titleSplashScreen: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#17191C',
    textAlign: 'center',
  },
  supportedContainer: {
    marginTop: 34,
  },
  supportedLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 33,
  },
  logoSupported: {
    marginLeft: 42,
  },
});
