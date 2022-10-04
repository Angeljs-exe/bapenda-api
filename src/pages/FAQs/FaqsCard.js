import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../assets';

const DATA = [
  {
    id: '1',
    title: 'Bagaimana cara pendaftaran akun login di aplikasi?',
    title1: '1. Buka Aplikasi',
    title2: '2. Pilih link “Daftar"',
    title3: '3. Masukkan Nomor telepon atau Email yang aktif',
    title4: '4. Pilih tombol “Masuk',
    title5: '5. Masukkan kode OTP yang dikirim melalui SMS',
    title6: '6. Mengisi data diri',
    title7: '7. Pilih tombol “Selanjutnya”',
  },
  {
    id: '2',
    title: 'Bagaimana cara menambahkan kendaraan di aplikasi?',
    title1: '1. Masuk di homepage dan klik “Button Tambah”',
    title2: '2. Masukkan Nomor Rangka Kendaraan anda"',
    title3: '3. Pilih tombol “Selanjutnya”',
    title4:
      '4. Akan muncul tampilan “Tidak Ditemukan” jika nomor rangka tidak ditemukan.',
    title5:
      '5. Akan muncul tampilan “Kendaraan belum terdaftar” jika kendaraan tersebut belum terdaftar.',
    title6: '6. Akan muncul tampilan Rincian Kendaraan',
    title7: '7. Pilih tombol “Tambah” dan selesai.',
  },
  {
    id: '3',
    title: 'Jika Kendaraan yang saya miliki belum jatuh tempo?',
    title1: '- Akan tampil notifikasi jika kendaraan anda belum jatuh tempo.',
    title2: 'Jika  saya telat membayar pajak kendaraan yang saya miliki?',
    title3:
      '- Akan tampil notifikasi belum mmebayar pajak kendaraan yang anda miliki.',
  },
];

const Faqs = ({
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
}) => (
  <View style={styles.faqContainer}>
    <Text style={styles.titleFaqs}>{title} </Text>
    <Text style={styles.subTitle}>{title1}</Text>
    <Text style={styles.subTitle}>{title2}</Text>
    <Text style={styles.subTitle}>{title3}</Text>
    <Text style={styles.subTitle}>{title4}</Text>
    <Text style={styles.subTitle}>{title5}</Text>
    <Text style={styles.subTitle}>{title6}</Text>
    <Text style={styles.subTitle}>{title7}</Text>
  </View>
);

const FaqsCard = () => {
  const renderItem = ({item}) => (
    <Faqs
      title={item.title}
      title1={item.title1}
      title2={item.title2}
      title3={item.title3}
      title4={item.title4}
      title5={item.title5}
      title6={item.title6}
      title7={item.title7}
    />
  );
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FaqsCard;

const styles = StyleSheet.create({
  faqContainer: {
    paddingHorizontal: 25,
  },
  titleFaqs: {
    fontSize: 16,
    fontFamily: fonts.Poppins.semibold,
    color: '#17191C',
    width: 350,
    marginTop: 44 / 2,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#17191C',
    marginTop: 12 / 2,
    marginBottom: 12 / 2.5,
  },
});
