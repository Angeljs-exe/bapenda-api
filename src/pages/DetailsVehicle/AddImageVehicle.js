import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts, IconAddPhoto, ImageNoBg} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {getData} from '../../utils';
import axios from 'axios';
import {baseUrl} from '../../utils/config';
import {Loading} from '../../components';
import {showMessage} from 'react-native-flash-message';

const AddImageVehicle = () => {
  const [galleryPhoto, setGalleryPhoto] = useState(false);
  const [photo, setPhoto] = useState();
  const [itemData, setDataItem] = useState();
  const [loading, setLoading] = useState(false);

  let options = {
    includeBase64: true,
    saveToPhotos: true,
    mediaType: 'photo',
    quality: 1,
    maxWidth: 200,
    maxHeight: 200,
  };

  const getImage = async () => {
    setLoading(true);
    await launchImageLibrary(options, async res => {
      if (res?.didCancel) {
        setGalleryPhoto(false);
        setLoading(false);
        Alert.alert('Anda Membatalkan Tambah Foto');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        setGalleryPhoto(true);
        setPhoto(res?.assets[0]?.uri);
        // console.log('ressssPhoto', res.assets.base64);
      }
      await getData('user').then(async resp => {
        await axios
          .post(`${baseUrl}/api/posts/vehicle/photo/${resp?.id}`, {
            _id: `${itemData?._id}`,
            fotoKendaraan: `data:${res?.assets[0]?.type};base64, ${res?.assets[0]?.base64}`,
          })
          .then(() => {
            setLoading(false);
            showMessage({
              message: 'Foto Kendaraan Berhasil Ditambahkan',
              backgroundColor: '#EBF6EE',
              color: '#2D8C46',
            });
          })
          .catch(() => {
            showMessage({
              message: 'Foto Kendaraan Gagal Ditambahkan',
              backgroundColor: '#FFF3F3',
              color: '#9C1C21',
            });
          });
      });
    });
  };

  const getDataItem = () => {
    getData('itemVehicle').then(res => {
      setDataItem(res);
    });
  };

  useEffect(() => {
    getDataItem();
  }, []);

  return (
    <>
      <TouchableOpacity onPress={() => getImage()}>
        {galleryPhoto && <Image style={styles.image} source={{uri: photo}} />}
        {!galleryPhoto && (
          <View style={styles.addImageContainer}>
            <ImageNoBg />
            <View style={styles.titleAddImage}>
              <Text style={styles.titleAddPhoto}>Tambah Foto</Text>
              <IconAddPhoto />
            </View>
          </View>
        )}
      </TouchableOpacity>
      {loading && <Loading />}
    </>
  );
};

export default AddImageVehicle;

const styles = StyleSheet.create({
  addImageContainer: {
    backgroundColor: '#F2F2F2',
    width: 310,
    height: 250,
    borderRadius: 8,
    marginTop: 16,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleAddImage: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleAddPhoto: {
    fontSize: 20,
    width: 250,
    fontFamily: fonts.Poppins.semibold,
    color: '#D1D1D1',
    textAlign: 'center',
  },
  image: {
    width: 310,
    height: 250,
    borderRadius: 8,
  },
});
