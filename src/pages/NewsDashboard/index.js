import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Header} from '../../components';
import {getData} from '../../utils';
import {useFocusEffect} from '@react-navigation/native';
import {fonts} from '../../assets';

const NewsDashboard = ({navigation}) => {
  const [dataNews, setDataNews] = useState();

  const getDataNews = () => {
    getData('dataNews')
      .then(res => {
        setDataNews(res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useFocusEffect(
    useCallback(() => {
      getDataNews();
    }, []),
  );
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Berita" onBack={() => navigation.replace('Dashboard')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentNewsContainer}>
          <Text style={styles.titleContentNews}>{dataNews?.title}</Text>
          <View style={styles.penerbitContainer}>
            <Text style={styles.textPenerbit}>Oleh : {dataNews?.creator}</Text>
            <Text>•</Text>
            <Text style={styles.textDate}>{dataNews?.date}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: dataNews?.imageUrl}} />
        </View>
        <Text style={styles.titleCredit}>Credit : {dataNews?.credit}</Text>
        <View style={styles.newsParagrafContainer}>
          <Text style={styles.titleNewsParagraf}>{dataNews?.text[0]}</Text>
          <Text style={styles.titleNewsParagraf}>{dataNews?.text[1]}</Text>
          <Text style={styles.titleNewsParagraf}>{dataNews?.text[2]}</Text>
          <Text style={styles.titleNewsParagraf}>{dataNews?.text[3]}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDashboard;

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
    width: 290,
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
    borderRadius: 10,
  },
  titleCredit: {
    paddingHorizontal: 25,
    marginTop: 5,
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
    marginBottom: 15,
  },
});
