import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts, ImageList} from '../../assets';
import axios from 'axios';
import {getData} from '../../utils';

const CardNotificationPay = ({item}) => {
  const [changeColor, setChangeColor] = useState(false);
  // const [dataVehicle, setDataVehicle] = useState();

  // const getDataVehicle = () => {
  //   getData
  // }

  const colorSubmit = () => {
    setChangeColor(true);
  };

  // useEffect(() => {
  //   colorSubmit();
  // }, []);

  // const notifVehicle = () => {
  //   getData('user').then(res => {
  //     axios
  //       .get(`http://10.0.2.2:3000/api/posts/vehicle/${res.id}`)
  //       .then(resp => {
  //         setDataVehicle(resp);
  //         // console.log('resp: ', resp.data);
  //         // getData('userVehicle').then(userV => {
  //         //   // setDataVehicle(userV);
  //         //   console.log('userVehicle: ', userV);
  //         // });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   });
  // };

  // useEffect(() => {
  //   notifVehicle();
  // }, []);

  // const getVehicle = () => {
  // return dataVehicle?.data.map(elemen => {
  return (
    <>
      <View style={styles.line} />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => colorSubmit()}
        style={[
          styles.notificationContainer,
          {backgroundColor: changeColor ? '#FFFFFF' : '#E9F3FD'},
        ]}>
        <ImageList />
        <View style={styles.titleContainer}>
          <Text style={styles.titleNotification}>
            Pemberitahuan Pembayaran Pajak
          </Text>
          <Text style={styles.contentNotification}>
            Pengguna yang terhormat, batas pembayaran{' '}
            <Text style={styles.titleTypeVehicle}>{item.TipeKendaraan}</Text>{' '}
            Rp. - pada{' '}
            <Text style={styles.titleTypeVehicle}>{item.JTPajak}</Text> harus
            segera diselesaikan
          </Text>
          {/* <Text style={styles.dateNotification}>Sekarang</Text> */}
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
    </>
  );
  // });
};
// return <View>{getVehicle()}</View>;
// };

export default CardNotificationPay;

const styles = StyleSheet.create({
  line: {
    borderWidth: 3,
    borderColor: '#D9D9D940',
  },
  notificationContainer: {
    backgroundColor: '#E9F3FD',
    width: '100%',
    height: 117,
    paddingHorizontal: 25,
    paddingVertical: 25,
    flexDirection: 'row',
  },
  titleContainer: {
    marginLeft: 12,
    bottom: 12,
  },
  titleNotification: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
  },
  contentNotification: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#757575',
    width: 300,
  },
  titleTypeVehicle: {
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  dateNotification: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#757575',
    marginTop: 4,
  },
});
