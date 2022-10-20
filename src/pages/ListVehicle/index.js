import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../../components';
import {fonts} from '../../assets';
import ListVehicleCard from './ListVehicleCard';
import axios from 'axios';
import {baseUrl} from '../../utils/config';
import {getData} from '../../utils';

const ListVehicle = ({navigation}) => {
  const [listDetail, setListDetail] = useState();

  const getListDetail = () => {
    getData('user').then(res => {
      console.log('hehe', res);
      axios
        .get(`${baseUrl}/api/posts/${res.id}`)
        .then(response => {
          setListDetail(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    getListDetail();
  }, []);

  if (!listDetail) {
    return null;
  }

  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Daftar Kendaraan"
        onBack={() => navigation.navigate('Dashboard')}
      />
      <View>
        <FlatList
          data={listDetail.kendaraan}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => {
            return <ListVehicleCard item={item} navigation={navigation} />;
          }}
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
});
