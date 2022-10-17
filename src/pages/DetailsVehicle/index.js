import React, {useCallback, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {Button, Header} from '../../components';
import {fonts, IconEditRename} from '../../assets';
import AddImageVehicle from './AddImageVehicle';
import DetailsContainer from './DetailsContainer';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import PaymentCode from './PaymentCode';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const DetailsVehicle = ({navigation}) => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ['1%', '70%', '80%'];

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  const [galleryPhoto, setGalleryPhoto] = useState();

  const openGallery = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('user cancelled the picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const result = res.assets[0];
        setGalleryPhoto(result);
        console.log(result);
      }
    });
  };

  // // kondisi
  // galleryPhoto != null && <Image source={{uri: galleryPhoto.uri}} />;

  return (
    <SafeAreaView style={styles.page}>
      <GestureHandlerRootView style={styles.page}>
        {/* {backgroundColor: isOpen ? '#75757580' : '#FFFFFF'} */}
        <Header
          title="Detail Kendaraan"
          onBack={() => navigation.navigate('Dashboard')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.detailsVehicleContainer}>
            <View style={styles.wrapperDetailsVehicle}>
              <TextInput
                style={styles.inputTitle}
                placeholder="Nama Kendaraan"
                placeholderTextColor="#D9D9D9"
              />
              <TouchableOpacity activeOpacity={0.5}>
                <IconEditRename />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => openGallery()}>
                <AddImageVehicle title={'Tambah Foto Depan'} />
              </TouchableOpacity>
              <AddImageVehicle title={'Tambah Foto Belakang'} />
              <AddImageVehicle title={'Tambah Foto Samping Kanan'} />
              <AddImageVehicle title={'Tambah Foto Samping Kiri'} />
            </ScrollView>
            <DetailsContainer />
          </View>
          <View style={styles.button}>
            <Button
              title="Lihat Kode Bayar"
              onPress={() => handleSnapPress(1)}
            />
          </View>
        </ScrollView>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}>
          <BottomSheetView>
            <PaymentCode />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default DetailsVehicle;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  detailsVehicleContainer: {
    paddingHorizontal: 25,
    marginTop: 8,
  },
  wrapperDetailsVehicle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputTitle: {
    fontSize: 24,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  button: {
    paddingHorizontal: 25,
    marginBottom: 10,
  },
});
