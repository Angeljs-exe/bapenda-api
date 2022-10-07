import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../assets';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={'large'} color={'#9C1C21'} />
      <Text style={styles.titleLoading}>Loading....</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  titleLoading: {
    fontSize: 18,
    fontFamily: fonts.Poppins.medium,
    color: '#9C1C21',
    marginTop: 16,
  },
});
