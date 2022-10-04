import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts, ImageNoBg} from '../../assets';

const RegisterVehicleCard = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.imgContainer}>
        <View style={styles.WrapperImg}>
          <ImageNoBg />
        </View>
        <View style={styles.dataVehicleContainer}>
          <View style={styles.wrapperDataVehicle}>
            <Text style={styles.titleMerkVehicle}>Honda CB150R</Text>
            <View style={styles.paymnetStatusContainer}>
              <Text style={styles.titlePaymentStatus}>Belum dibayar</Text>
            </View>
          </View>
          <View style={styles.wrapperSubdataVehicle}>
            <Text style={styles.titleNumberPolice}>DB 5848 C</Text>
            <Text style={styles.titlePayment}>Rp 312.000</Text>
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
