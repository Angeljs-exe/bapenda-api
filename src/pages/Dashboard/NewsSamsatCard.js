import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fonts, ImgNewsSamsat} from '../../assets';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titleNews: 'Pemprov Sulut Berikan Potongan Pajak Ranmor Hingga 10%',
    dateNews: '25 Ags 2022',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bs',
    titleNews: 'Pemprov Sulut Berikan GiveAway Kepada Masyarakat',
    dateNews: '30 Ags 2022',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    titleNews:
      'Pemprov Sulut Berikan Mobil Kepada Masyarakat Yang Tidak Pernah Mengungggak PAJAK',
    dateNews: '25 Des 2022',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bz',
    titleNews:
      'Pemprov Sulut Berikan Apresiasi Kepada Fakultas Ilmu Komputer UNKLAB',
    dateNews: '25 Des 2022',
  },
];

const NewsSamsat = ({titleNews, dateNews, navigation}) => (
  <View style={styles.NewsContainer}>
    <View style={styles.newsSamsat}>
      <Image style={styles.imgNewsSamsat} source={ImgNewsSamsat} />
      <View style={styles.newsTitleContainer}>
        <Text style={styles.newsTitle}>{titleNews}</Text>
        <Text style={styles.newsDate}>{dateNews}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('NewsDetails')}>
          <Text style={styles.newsMore}>Lihat selengkapnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const NewsSamsatCard = ({navigation}) => {
  const renderItem = ({item}) => (
    <NewsSamsat
      titleNews={item.titleNews}
      dateNews={item.dateNews}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.page}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewsSamsatCard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    marginTop: 9,
  },
  NewsContainer: {
    borderWidth: 1,
    borderColor: '#9B9B9B',
    borderRadius: 6,
    height: 152,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#FFFFFF',
    marginBottom: 50 / 3,
  },
  newsSamsat: {
    flexDirection: 'row',
  },
  imgNewsSamsat: {
    width: 108,
    height: 116,
  },
  newsTitleContainer: {
    marginLeft: 16,
  },
  newsTitle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
    width: 250,
    flex: 1,
  },
  newsDate: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
    marginTop: 4,
  },
  newsMore: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#9B9B9B',
    marginTop: 4.5,
  },
});
