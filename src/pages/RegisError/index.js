import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, IconRegisError} from '../../assets';
import {Button, Header} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RegisError = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Tambah Kendaraan"
        onBack={() => navigation.replace('Dashboard')}
      />
      <View style={styles.regisCompletedContainer}>
        <IconRegisError />
        <View style={styles.titleCompletedContainer}>
          <Text style={styles.titleCompleted}>Mohon Maaf Nomor Polisi </Text>
          <Text style={styles.titleRegisError}>Tidak Ditemukan.</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Tambah Kendaraan"
          onPress={() => navigation.replace('AddVehicle')}
        />
      </View>
    </View>
  );
};

export default RegisError;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  regisCompletedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCompletedContainer: {
    alignItems: 'center',
    marginTop: 48,
  },
  titleCompleted: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
    textAlign: 'center',
  },
  titleRegisError: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#CA0B00',
  },
  buttonContainer: {
    paddingHorizontal: 25,
    marginBottom: 84,
  },
});
