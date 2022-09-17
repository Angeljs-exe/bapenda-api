import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import FaqsCard from './FaqsCard';

const FAQs = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title="FAQ" onBack={() => navigation.navigate('Profile')} />
      <FaqsCard />
    </SafeAreaView>
  );
};

export default FAQs;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
