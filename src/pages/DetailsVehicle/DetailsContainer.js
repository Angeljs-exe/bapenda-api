import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../assets';

const DetailsContainer = () => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.paymentStatusContainer}>
        <Text style={styles.titlePayment}>Rp 342.000</Text>
        <View style={styles.wrapperPaymentStatus}>
          <Text style={styles.titlePaymentStatus}>Belum dibayar</Text>
        </View>
      </View>
      <Text style={styles.titleRemindersDate}>Batas Pembayaran 26/09/2022</Text>
      <View style={styles.dataVehicleContainer}>
        <View style={styles.dataVehicle}>
          <Text style={styles.titleDataVehicle}>NOMOR MESIN</Text>
          <Text style={styles.titleOutputVehicle}>HGAI-7588976</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.dataVehicleContainer}>
        <View style={styles.dataVehicle}>
          <Text style={styles.titleDataVehicle}>NOMOR POLISI</Text>
          <Text style={styles.titleOutputVehicle}>DB 5848 C</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.dataVehicleContainer}>
        <View style={styles.dataVehicle}>
          <Text style={styles.titleDataVehicle}>TAHUN PEMBUATAN</Text>
          <Text style={styles.titleOutputVehicle}>2016</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.dataVehicleContainer}>
        <View style={styles.dataVehicle}>
          <Text style={styles.titleDataVehicle}>MASA BERLAKU STNK</Text>
          <Text style={styles.titleOutputVehicle}>25 MEI 2023</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.dataVehicleContainer}>
        <View style={styles.dataVehicle}>
          <Text style={styles.titleDataVehicle}>TYPE</Text>
          <Text style={styles.titleOutputVehicle}>HSGD</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.dataVehicleContainer}>
        <View style={styles.dataVehicle}>
          <Text style={styles.titleDataVehicle}>SERI</Text>
          <Text style={styles.titleOutputVehicle}>HGA163</Text>
        </View>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default DetailsContainer;

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 24,
  },
  paymentStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePayment: {
    fontSize: 24,
    fontFamily: fonts.Poppins.medium,
    color: '#9A0000',
  },
  wrapperPaymentStatus: {
    borderWidth: 1,
    borderColor: '#D53931',
    backgroundColor: '#FFF3F3',
    width: 110,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 8,
  },
  titlePaymentStatus: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#D53931',
  },
  titleRemindersDate: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#757575',
  },
  dataVehicleContainer: {
    marginTop: 28,
  },
  dataVehicle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleDataVehicle: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#242424',
  },
  titleOutputVehicle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  line: {
    borderWidth: 3,
    borderColor: '#D9D9D940',
    marginTop: 12,
  },
});
