import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, Header} from '../../components';
import {fonts, IconVehicleDashboard} from '../../assets';
import ListVehicleCard from './ListVehicleCard';
import axios from 'axios';
import {baseUrl} from '../../utils/config';
import {getData} from '../../utils';
import {useFocusEffect} from '@react-navigation/native';

const ListVehicle = ({navigation}) => {
  const [listDetail, setListDetail] = useState();
  const [touchAdd, setTouchAdd] = useState(false);

  const getListDetail = async () => {
    await getData('user').then(async res => {
      await axios
        .get(`${baseUrl}/api/posts/${res.id}`)
        .then(response => {
          setListDetail(response.data);
          if (response.data.kendaraan.length === 0) {
            setTouchAdd(false);
          } else {
            setTouchAdd(true);
          }
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  useFocusEffect(
    useCallback(() => {
      getListDetail();
    }, []),
  );

  if (!listDetail) {
    return null;
  }

  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Daftar Kendaraan"
        onBack={() => navigation.replace('Dashboard')}
      />
      {touchAdd && (
        <FlatList
          data={listDetail?.kendaraan}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => {
            return <ListVehicleCard item={item} navigation={navigation} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
      {!touchAdd && (
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
                onPress={() => navigation.replace('AddVehicle')}>
                <Text style={styles.textDaftar}>Daftar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <View style={styles.buttomHeight} />
      <View style={styles.buttom}>
        <Button
          click="iconOnly"
          icon="iconHomeBlur"
          onPress={() => navigation.replace('Dashboard')}
        />
        <View style={styles.dio}>
          <Button
            click="iconOnly"
            icon="iconAddVehicleBlur"
            onPress={() => navigation.replace('AddVehicle')}
          />
        </View>
        <Button
          click="iconOnly"
          icon="iconListVehicle"
          onPress={() => navigation.replace('ListVehicle')}
        />
      </View>
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
  buttomHeight: {
    height: 40,
  },
  buttom: {
    backgroundColor: '#9A0000',
    width: '100%',
    height: 68,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 60,
  },
});
