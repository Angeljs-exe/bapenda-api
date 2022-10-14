import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../../components';
import CardNotificationPay from './CardNotificationPay';
import {getData} from '../../utils';
import axios from 'axios';
const Notification = ({navigation}) => {
  const [dataVehicle, setDataVehicle] = useState();

  const notifVehicle = () => {
    getData('user').then(res => {
      axios
        .get(`http://10.0.2.2:3000/api/posts/vehicle/${res.id}`)
        .then(resp => {
          setDataVehicle(resp);
          console.log('resp: ', resp);
          // console.log('resp: ', resp.data);
          // getData('userVehicle').then(userV => {
          //   // setDataVehicle(userV);
          //   console.log('userVehicle: ', userV);
          // });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    notifVehicle();
  }, []);

  if (!dataVehicle) {
    return null;
  }

  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Notifikasi"
        onBack={() => navigation.navigate('Dashboard')}
      />
      <FlatList
        data={dataVehicle?.data}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return <CardNotificationPay item={item} />;
        }}
      />
      {/* <CardNotificationPay /> */}
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
