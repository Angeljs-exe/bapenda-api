import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import NewsSamsatCard from '../Dashboard/NewsSamsatCard';

const News = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Header
          title="Berita"
          onBack={() => navigation.navigate('Dashboard')}
        />
      </View>
      <NewsSamsatCard navigation={navigation} />
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
