import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, IconRegisError} from '../../assets';

const RegisEroor = ({numberRangka}) => {
  return (
    <View style={styles.regisCompletedContainer}>
      <IconRegisError />
      <View style={styles.titleCompletedContainer}>
        <Text style={styles.titleCompleted}>
          Mohon Maaf Nomor Rangka {numberRangka}{' '}
          <Text style={styles.titleRegisError}>Tidak Ditemukan.</Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisEroor;

const styles = StyleSheet.create({
  regisCompletedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 156.14,
  },
  titleCompletedContainer: {
    marginTop: 60,
  },
  titleCompleted: {
    fontSize: 16,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
    width: 248,
    textAlign: 'center',
  },
  titleRegisError: {
    color: '#CA0B00',
  },
  buttonContiner: {
    paddingHorizontal: 25,
    marginTop: 128.5,
  },
});
