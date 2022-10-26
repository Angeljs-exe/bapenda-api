import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {fonts} from '../../assets';
import axios from 'axios';
import {baseUrl} from '../../utils/config';
import {useFocusEffect} from '@react-navigation/native';

const ContentNewsDetails = ({onPress}) => {
  const [listNews, setListNews] = useState();

  const getListNews = async () => {
    await axios
      .get(`${baseUrl}/api/news/`)
      .then(res => {
        setListNews(res.data[1]);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useFocusEffect(
    useCallback(() => {
      getListNews();
    }, []),
  );

  return (
    <View style={styles.page}>
      <View style={styles.NewsContainer1}>
        <View style={styles.newsSamsat}>
          <Image
            style={styles.imgNewsSamsat}
            source={{uri: listNews?.imageUrl}}
          />
          <View style={styles.newsTitleContainer}>
            <Text style={styles.newsTitle} numberOfLines={1}>
              {listNews?.title}
            </Text>
            <Text style={styles.newsDate}>{listNews?.date}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              // onPress={() => {
              //   // const dataNews = {
              //   //   title: item.title,
              //   //   date: item.date,
              //   //   imageUrl: item.imageUrl,
              //   //   text: item.text,
              //   //   credit: item.credit,
              //   //   creator: item.creator,
              //   // };
              //   // storeData('dataNews', dataNews);
              //   // navigation.navigate('NewsDetails');
              // }}
              onPress={onPress}>
              <Text style={styles.newsMore}>Lihat selengkapnya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const ContentNewsDetails2 = ({onPress}) => {
  const [listNews, setListNews] = useState();

  const getListNews = async () => {
    await axios
      .get(`${baseUrl}/api/news/`)
      .then(res => {
        setListNews(res.data[2]);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useFocusEffect(
    useCallback(() => {
      getListNews();
    }, []),
  );
  return (
    <View style={styles.page}>
      <View style={styles.NewsContainer2}>
        <View style={styles.newsSamsat}>
          <Image
            style={styles.imgNewsSamsat}
            source={{uri: listNews?.imageUrl}}
          />
          <View style={styles.newsTitleContainer}>
            <Text style={styles.newsTitle} numberOfLines={1}>
              {listNews?.title}
            </Text>
            <Text style={styles.newsDate}>{listNews?.date}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              // onPress={() => {
              //   const dataNews = {
              //     title: listNews.title,
              //     date: listNews.date,
              //     imageUrl: listNews.imageUrl,
              //     text: listNews.text,
              //     credit: listNews.credit,
              //     creator: listNews.creator,
              //   };
              //   storeData('dataNews', dataNews);
              //   navigation.navigate('NewsDetails');
              // }}
              onPress={onPress}>
              <Text style={styles.newsMore}>Lihat selengkapnya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export {ContentNewsDetails, ContentNewsDetails2};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    marginTop: 9,
  },
  NewsContainer1: {
    borderWidth: 1,
    borderColor: '#9B9B9B',
    borderRadius: 6,
    height: 152,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  NewsContainer2: {
    borderWidth: 1,
    borderColor: '#9B9B9B',
    borderRadius: 6,
    height: 152,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#FFFFFF',
    marginBottom: 40,
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
    width: 230,
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
