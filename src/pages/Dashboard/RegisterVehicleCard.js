import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts, ImageNoBg} from '../../assets';
import {getData} from '../../utils';
import axios from 'axios';
import {baseUrl} from '../../utils/config';

const RegisterVehicleCard = ({onPress, navigation}) => {
  // const [dataVehicle, setDataVehicle] = useState({
  //   NomorMesin: '',
  //   TahunBuat: '',
  //   NRKB: '',
  //   JTPajak: '',
  //   KodeBayar: '',
  // });

  const [listDetail, setListDetail] = useState();
  console.log('tolong', listDetail);

  // const getDataVehicle = () => {
  //   getData('userVehicle').then(res => {
  //     setDataVehicle(res);
  //     console.log('heheh', res);
  //   });
  // };

  const showDataVehicle = () => {
    getData('user').then(res => {
      console.log('hehe', res);
      axios
        .get(`${baseUrl}/api/posts/vehicle/${res.id}`)
        .then(response => {
          setListDetail(response.data[response.data.length - 1]);
          console.log('response db1', response.data[response.data.length - 1]);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    // getDataVehicle();
    showDataVehicle();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.imgContainer}>
        <View style={styles.WrapperImg}>
          <ImageNoBg />
        </View>
        <View style={styles.dataVehicleContainer}>
          <View style={styles.wrapperDataVehicle}>
            {/* <Text style={styles.titleMerkVehicle}>
              {listDetail.NamaKendaraan}
            </Text> */}
            {listDetail?.KodeBayar === '-' ? (
              <View style={styles.paymnetStatusContainer}>
                <Text style={styles.titlePaymentStatus}>Belum dibayar</Text>
              </View>
            ) : (
              <View style={styles.paymnetStatusContainerLunas}>
                <Text style={styles.titlePaymentStatusLunas}>Lunas</Text>
              </View>
            )}
          </View>
          <View style={styles.wrapperSubdataVehicle}>
            <Text style={styles.titleNumberPolice}>
              {`${
                listDetail?.NRKB.match(/[a-zA-Z]+/g)?.[0]
              } ${listDetail?.NRKB.match(/\d+/g)} ${
                listDetail?.NRKB.match(/[a-zA-Z]+/g)?.[1]
              }`}
            </Text>
            {/* <Text style={styles.titleNumberPolice}>{listDetail.NRKB}</Text> */}
            <Text style={styles.titlePayment}>Rp -</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterVehicleCard;

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: '#737474',
    width: '100%',
    height: 245,
    borderRadius: 8,
    marginTop: 8,
  },
  WrapperImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataVehicleContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrapperDataVehicle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 159,
  },
  paymnetStatusContainer: {
    borderWidth: 1,
    borderColor: '#D53931',
    backgroundColor: '#FFF3F3',
    width: 110,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 8,
  },
  paymnetStatusContainerLunas: {
    borderWidth: 1,
    borderColor: '#34A853',
    backgroundColor: '#85CB98',
    width: 110,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 8,
  },
  titleMerkVehicle: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#FFFFFF',
  },
  titlePaymentStatus: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#D53931',
  },
  titlePaymentStatusLunas: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#2A8642',
  },
  wrapperSubdataVehicle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 9,
  },
  titleNumberPolice: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#FFFFFF',
  },
  titlePayment: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#FFFFFF',
  },
});
