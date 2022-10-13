import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../../components';
import {fonts, IconVehicleDashboard} from '../../assets';
import ListVehicleCard from './ListVehicleCard';
import axios from 'axios';
import {getData} from '../../utils';
import {baseUrl} from '../../utils/config';

const ListVehicle = ({navigation}) => {
  const [listDetail, setListDetail] = useState();
  let [profile, setProfile] = useState();
  let profile_id = '';
  const [dataVehicle, setDataVehicle] = useState({
    NomorMesin: '',
    TahunBuat: '',
    TipeKendaraan: '',
    NRKB: '',
    JTPajak: '',
  });

  const getDataVehicle = () => {
    getData('userVehicle').then(res => {
      setDataVehicle(res);
    });
  };

  const getDataUser = () => {
    getData('user').then(res => {
      const id = res.id;
      console.log('id', id);
      setProfile(id);
      profile_id = id;
      console.log('set profile:', profile_id);
      axios
        .get(`${baseUrl}/api/posts/vehicle/${profile_id}`)
        .then(function (response) {
          console.log('response listVehicle:', response.data);
          setListDetail(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getDataVehicle();
      getDataUser();
      // getListDetail();
    });
  }, [navigation]);

  // function getListDetail() {

  // }

  // if (!listDetail) {
  //   return null;
  // }

  return (
    <View style={styles.page}>
      <Header
        title="Daftar Kendaraan"
        onBack={() => navigation.navigate('Dashboard')}
      />
      {/* <ScrollView> */}
      <View>
        <FlatList
          data={listDetail}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => {
            return <ListVehicleCard item={item} />;
          }}
        />
      </View>
      {/* </ScrollView> */}
    </View>
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
