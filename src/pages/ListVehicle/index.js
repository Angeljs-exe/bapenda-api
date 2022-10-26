import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, Header} from '../../components';
import {fonts} from '../../assets';
import ListVehicleCard from './ListVehicleCard';
import axios from 'axios';
import {baseUrl} from '../../utils/config';
import {getData} from '../../utils';
import {useFocusEffect} from '@react-navigation/native';

const ListVehicle = ({navigation}) => {
  const [listDetail, setListDetail] = useState();

  const getListDetail = async () => {
    await getData('user').then(async res => {
      await axios
        .get(`${baseUrl}/api/posts/${res.id}`)
        .then(response => {
          setListDetail(response.data);
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
        onBack={() => navigation.navigate('Dashboard')}
      />
      <FlatList
        data={listDetail?.kendaraan}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return <ListVehicleCard item={item} navigation={navigation} />;
        }}
        showsVerticalScrollIndicator={false}
      />
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
