import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, NoImage} from '../../assets';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bimtek Penyusunan Peta Jalan dan Rencana Kerja ETPD',
    penerbit: 'admin77',
    date: '14 April 2022',
    credit: 'Bapenda Sulawesi Utara',
    newsParagraf:
      'Dalam rangka implementasi Elektronifikasi Transaksi Pemerintah Daerah (ETPD), Badan Pendapatan Daerah Provinsi Sulawesi Utara bersama KPWBI Sulut (Bank Indonesia) menggelar Bimbingan Teknis (Bimtek) Penyusunan Peta Jalan dan Rencana Kerja pada Kamis, 14 April 2022',
  },
];

const ContentNews = ({title, penerbit, date, credit, newsParagraf}) => (
  <View>
    <View style={styles.contentNewsContainer}>
      <Text style={styles.titleContentNews}>{title}</Text>
      <View style={styles.penerbitContainer}>
        <Text style={styles.textPenerbit}>Oleh : {penerbit}</Text>
        <Text>•</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>
    </View>
    <View style={styles.imageContainer}>
      <Image source={NoImage} style={styles.image} />
    </View>
    <Text style={styles.titleCredit}>Credit : {credit}</Text>
    <View style={styles.newsParagrafContainer}>
      <Text style={styles.titleNewsParagraf}>{newsParagraf}</Text>
    </View>
  </View>
);

const ContentNewsDetails = () => {
  const renderItem = ({item}) => (
    <ContentNews
      title={item.title}
      penerbit={item.penerbit}
      date={item.date}
      credit={item.credit}
      newsParagraf={item.newsParagraf}
    />
  );

  return (
    <View style={styles.page}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContentNewsDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentNewsContainer: {
    paddingHorizontal: 25,
    paddingTop: 16,
  },
  titleContentNews: {
    fontSize: 16,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
    width: 304,
  },
  penerbitContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  textPenerbit: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#242424B2',
    marginRight: 12,
  },
  textDate: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#242424B2',
    marginLeft: 12,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 12,
  },
  image: {
    width: 364,
    height: 219,
  },
  titleCredit: {
    paddingHorizontal: 25,
    marginTop: 4,
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#242424B2',
  },
  newsParagrafContainer: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  titleNewsParagraf: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
    width: 362,
  },
});
