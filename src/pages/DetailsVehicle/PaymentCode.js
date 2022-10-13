import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts, IconSalin} from '../../assets';
import PaymentMethodATM from './PaymentMethod';
import OfficePaymentMethod from './OfficePaymentMethod';
import {getData} from '../../utils';

let ATM = [
  {
    id: 1,
    text: '1. Copy kode bayar',
  },
  {
    id: 2,
    text: '2. Pilih menu lainnya',
  },
  {
    id: 3,
    text: '3. Pilih menu pembayaran',
  },
  {
    id: 4,
    text: '4. Pilih menu Lainnya',
  },
  {
    id: 5,
    text: '5. Pilih Menu Multi Biller ',
  },
  {
    id: 6,
    text: '6. Masukkan 505 + Kode Bayar ',
  },
  {
    id: 7,
    text: '7. Periksa tagihan, klik benar untuk melakukan pembayaran ',
  },
];

let kantor = [
  {
    id: 1,
    text: '1. Ambil Nomor Antrian Trasaksi Teller dan Isi Slip Setoran dengan Kode Bayar Pajak',
  },
  {
    id: 2,
    text: '2. Serahkan Slip dengan Kode Bayar Pajak serta Jumlah Setoran kepada Teller',
  },
  {
    id: 3,
    text: '3. Teller BSG Akan Melakukan Validasi Transaksi',
  },
  {
    id: 4,
    text: '4. Simpan Slip Setoran Hasil Validasi Sebagai Bukti Pembayaran',
  },
];

const PaymentCode = () => {
  const [dataVehicle, setDataVehicle] = useState({
    KodeBayar: '',
  });

  const getDataVehicle = () => {
    getData('userVehicle').then(res => {
      setDataVehicle(res);
    });
  };

  useEffect(() => {
    getDataVehicle();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nama Kendaraan</Text>
      <View style={styles.pageCodePaymnet}>
        <Text style={styles.titleCodePayment}>Kode Bayar</Text>
        <View style={styles.codePaymentContainer}>
          <View style={styles.codePayment}>
            <Text style={styles.subTitleCodePayment}>
              {dataVehicle.KodeBayar}
            </Text>
            <TouchableOpacity activeOpacity={0.5}>
              <IconSalin />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.titlePaymentMethod}>Metode Pembayaran :</Text>
        <PaymentMethodATM data={ATM} />
        <OfficePaymentMethod data={kantor} />
      </ScrollView>
    </View>
  );
};

export default PaymentCode;

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    paddingHorizontal: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: fonts.Poppins.semibold,
  },
  pageCodePaymnet: {
    marginTop: 32,
  },
  titleCodePayment: {
    fontSize: 16,
    fontFamily: fonts.Poppins.regular,
    color: '#242424',
  },
  codePaymentContainer: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginTop: 12.5,
  },
  codePayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitleCodePayment: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#75757580',
  },
  titlePaymentMethod: {
    fontSize: 16,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
    marginTop: 28,
  },
  howPaymentATMBSGContiner: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CDD1E0',
    width: '100%',
    height: 41,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 12,
  },
  howPaymnetATMBSG: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitleHowPayment: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
  },
});
