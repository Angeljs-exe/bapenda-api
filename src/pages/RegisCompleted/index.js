import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {fonts, IconRegisCompleted} from '../../assets';
// import {Button} from '../../components';
// import RegisEroor from './RegisEroor';

const RegisCompleted = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Dashboard');
    }, 1500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.regisCompletedContainer}>
        <IconRegisCompleted />
        <View style={styles.titleCompletedContainer}>
          <Text style={styles.titleCompleted}>
            Selamat Kendaraan Anda Telah Terdaftar.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisCompleted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  regisCompletedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleCompletedContainer: {
    marginTop: 60,
  },
  titleCompleted: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
    width: 248,
    textAlign: 'center',
  },
  titleRegisError: {
    color: '#CA0B00',
  },
  buttonContiner: {
    paddingHorizontal: 25,
    marginTop: 128.5,
  },
});
