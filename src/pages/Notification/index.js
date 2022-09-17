import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import CardNotification from './CardNotification';

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Notifikasi"
        onBack={() => navigation.navigate('Dashboard')}
      />
      <CardNotification />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
