import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../components';
import {fonts, IconVehicleDashboard} from '../../assets';
import ListVehicleCard from './ListVehicleCard';

const ListVehicle = ({navigation}) => {
  const [touchRegister, setTouchRegister] = useState(false);

  const touchRegisterSumbit = () => {
    setTouchRegister(true);
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Daftar Kendaraan"
        onBack={() => navigation.navigate('Dashboard')}
      />
      {touchRegister && <ListVehicleCard />}
      {!touchRegister && (
        <View style={styles.wrapperRegister}>
          <IconVehicleDashboard />
          <View style={styles.titleListContainer}>
            <Text style={styles.textListVehicle}>
              Tidak ada kendaraan yang didaftarkan
            </Text>
            <View style={styles.wrapperDaftarContainer}>
              <Text style={styles.wrapperDaftar}>
                Silahkan daftarkan kendaraan anda.{' '}
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={touchRegisterSumbit}>
                <Text style={styles.textDaftar}>Daftar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ListVehicle;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapperRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 129,
  },
  titleListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  textListVehicle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#9B9B9B',
  },
  wrapperDaftarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16 / 2,
  },
  wrapperDaftar: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#9B9B9B',
  },
  textDaftar: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#9C1C21',
    textDecorationLine: 'underline',
  },
});
