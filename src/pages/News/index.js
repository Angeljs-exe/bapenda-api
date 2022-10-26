import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Header} from '../../components';
import NewsSamsatCard from '../Dashboard/NewsSamsatCard';
import axios from 'axios';
import {baseUrl} from '../../utils/config';
import {useFocusEffect} from '@react-navigation/native';

const News = ({navigation}) => {
  const [listNews, setListNews] = useState();

  const getListNews = async () => {
    await axios
      .get(`${baseUrl}/api/news/`)
      .then(res => {
        setListNews(res.data);
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
    <SafeAreaView style={styles.page}>
      <Header title="Berita" onBack={() => navigation.replace('Dashboard')} />
      <FlatList
        data={listNews}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return <NewsSamsatCard item={item} navigation={navigation} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
