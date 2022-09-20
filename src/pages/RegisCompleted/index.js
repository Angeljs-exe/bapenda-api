import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, IconRegisCompleted} from '../../assets';
import {Button} from '../../components';
// import RegisEroor from './RegisEroor';

const RegisCompleted = ({navigation, numberRangka}) => {
  return (
    <SafeAreaView style={styles.page}>
      {/* <RegisEroor numberRangka={'123456'} /> */}
      <View style={styles.regisCompletedContainer}>
        <IconRegisCompleted />
        <View style={styles.titleCompletedContainer}>
          <Text style={styles.titleCompleted}>
            Selamat Kendaraan Anda Telah Terdaftar.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContiner}>
        <Button
          title="Beranda"
          onPress={() => navigation.replace('Dashboard')}
        />
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
    marginTop: 156.14,
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
