import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts, IconAddPhoto, ImageNoBg} from '../../assets';

const AddImageVehicle = ({title}) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.addImageContainer}>
          <View style={styles.imageNoBg}>
            <ImageNoBg />
            <View style={styles.addPhotoContainer}>
              <Text style={styles.titleAddPhoto}>{title}</Text>
              <View style={styles.iconCamera}>
                <IconAddPhoto />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default AddImageVehicle;

const styles = StyleSheet.create({
  addImageContainer: {
    backgroundColor: '##7575751A',
    width: 310,
    height: 238,
    borderRadius: 8,
    marginTop: 16,
    marginRight: 10,
  },
  imageNoBg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#75757580',
    width: 310,
    height: 238,
    borderRadius: 8,
  },
  titleAddPhoto: {
    fontSize: 20,
    width: 250,
    fontFamily: fonts.Poppins.semibold,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  iconCamera: {
    marginTop: 6,
  },
});
