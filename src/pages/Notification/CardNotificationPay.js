import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts, ImageList} from '../../assets';
import {storeData} from '../../utils';

const CardNotificationPay = ({item, navigation}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          const dataItem = {
            JTPajak: item.JTPajak,
            KodeBayar: item.KodeBayar,
            NRKB: item.NRKB,
            NomorMesin: item.NomorMesin,
            TahunBuat: item.TahunBuat,
            TipeKendaraan: item.TipeKendaraan,
            _id: item._id,
            NamaKendaraan: item.NamaKendaraan,
            fotoKendaraan: item.fotoKendaraan,
          };
          storeData('itemVehicle', dataItem);
          navigation.navigate('DetailsVehicle', {dataItem});
        }}
        style={styles.notificationContainer}>
        {item?.fotoKendaraan ? (
          <Image style={styles.image} source={{uri: item?.fotoKendaraan}} />
        ) : (
          <ImageList />
        )}
        {/* <ImageList /> */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleNotification}>
            Pemberitahuan Pembayaran Pajak
          </Text>
          <Text style={styles.contentNotification}>
            Pengguna yang terhormat, batas pembayaran{' '}
            <Text style={styles.titleTypeVehicle}>{item?.TipeKendaraan}</Text>{' '}
            Rp. - pada{' '}
            <Text style={styles.titleTypeVehicle}>{item?.JTPajak}</Text> harus
            segera diselesaikan
          </Text>
          {/* <Text style={styles.dateNotification}>Sekarang</Text> */}
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
    </>
  );
};

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
  image: {
    width: 80,
    height: 72,
    borderRadius: 8,
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
