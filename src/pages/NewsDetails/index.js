import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import ContentNewsDetails from './ContentNewsDetails';

const NewsDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Berita" onBack={() => navigation.replace('News')} />
      <ContentNewsDetails />
    </SafeAreaView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
