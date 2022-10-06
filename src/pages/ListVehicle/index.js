import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../../components';
import {fonts, IconVehicleDashboard} from '../../assets';
import ListVehicleCard from './ListVehicleCard';
import axios from 'axios';

const ListVehicle = ({navigation}) => {
  const [listDetail, setListDetail] = useState();

  useEffect(() => {
    getListDetail();
  }, []);

  function getListDetail() {
    axios
      .get('http://10.0.2.2:3000/api/posts/63354d8760a110d189f8efa5')
      .then(function (response) {
        console.log('response ', response);
        setListDetail(response.data);
        console.log('fix ', listDetail);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
            return <ListVehicleCard item={item} />;
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
