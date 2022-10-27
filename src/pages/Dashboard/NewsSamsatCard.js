import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../../assets';
import {storeData} from '../../utils';

const NewsSamsatCard = ({item, navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.NewsContainer}>
        <View style={styles.newsSamsat}>
          <Image style={styles.imgNewsSamsat} source={{uri: item?.imageUrl}} />
          <View style={styles.newsTitleContainer}>
            <Text style={styles.newsTitle} numberOfLines={1}>
              {item?.title}
            </Text>
            <Text style={styles.newsDate}>{item?.date}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                const dataNews = {
                  title: item.title,
                  date: item.date,
                  imageUrl: item.imageUrl,
                  text: item.text,
                  credit: item.credit,
                  creator: item.creator,
                };
                storeData('dataNews', dataNews);
                navigation.navigate('NewsDetails', dataNews);
              }}>
              <Text style={styles.newsMore}>Lihat selengkapnya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    borderWidth: 0.3,
    borderColor: '#9B9B9B',
    borderRadius: 6,
    height: 152,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#FFFFFF',
    marginBottom: 50 / 3,
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  newsSamsat: {
    flexDirection: 'row',
  },
  imgNewsSamsat: {
    width: 108,
    height: 116,
    borderRadius: 10,
  },
  newsTitleContainer: {
    marginLeft: 16,
  },
  newsTitle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#242424',
    width: 210,
    flex: 1,
  },
  newsDate: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#242424',
    marginTop: 4,
  },
  newsMore: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#9B9B9B',
    marginTop: 4.5,
  },
});
