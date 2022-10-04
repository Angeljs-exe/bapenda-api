import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fonts, ImageList} from '../../assets';

const CardNotification = () => {
  const [changeColor, setChangeColor] = useState(false);

  const colorSubmit = () => {
    setChangeColor(true);
  };
  return (
    <>
      <View style={styles.line} />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => colorSubmit()}
        style={[
          styles.notificationContainer,
          {backgroundColor: changeColor ? '#FFFFFF' : '#E9F3FD'},
        ]}>
        <ImageList />
        <View style={styles.titleContainer}>
          <Text style={styles.titleNotification}>
            Pemberitahuan Pembayaran Pajak
          </Text>
          <Text style={styles.contentNotification}>
            Pengguna yang terhormat, batas pembayaran Honda CB150R Rp. 342.000
            pada 23/10/22 harus segera diselesaikan
          </Text>
          <Text style={styles.dateNotification}>Sekarang</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
    </>
  );
};

export default CardNotification;

const styles = StyleSheet.create({
  line: {
    borderWidth: 3,
    borderColor: '#D9D9D940',
  },
  notificationContainer: {
    backgroundColor: '#E9F3FD',
    width: '100%',
    height: 117,
    paddingHorizontal: 25,
    paddingVertical: 25,
    flexDirection: 'row',
  },
  titleContainer: {
    marginLeft: 12,
    bottom: 12,
  },
  titleNotification: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
  },
  contentNotification: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#757575',
    width: 250,
  },
  dateNotification: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#757575',
    marginTop: 4,
  },
});
