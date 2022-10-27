import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Header} from '../../components';
import {fonts, IconEditRename} from '../../assets';
import AddImageVehicle from './AddImageVehicle';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import PaymentCode from './PaymentCode';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {launchImageLibrary} from 'react-native-image-picker';
import {baseUrl} from '../../utils/config';
import axios from 'axios';
import {getData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
// import {launchImageLibrary} from 'react-native-image-picker';

const DetailsVehicle = ({navigation, route}) => {
  const selectedVehicle = route.params.dataItem;

  let [myValue, setMyValue] = useState('');
  const [photo, setPhoto] = useState(selectedVehicle?.fotoKendaraan[0]);

  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [itemData, setItemData] = useState();

  const snapPoints = ['1%', '70%', '80%'];
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  const updateName = () => {
    getData('user').then(res => {
      axios
        .post(`${baseUrl}/api/posts/updateName/${res.id}`, {
          _id: `${itemData?._id}`,
          NamaKendaraan: `${myValue}`,
        })
        .then(response => {
          // setMyValue('');
          console.log('sukses brow', response);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

  let options = {
    includeBase64: true,
    saveToPhotos: true,
    mediaType: 'photo',
    quality: 1,
    maxWidth: 200,
    maxHeight: 200,
  };

  const changeImage = async () => {
    await launchImageLibrary(options, async res => {
      if (res?.didCancel) {
        Alert.alert('Anda Membatalkan Tambah Foto');
      } else {
        setPhoto(res?.assets[0]?.uri);
        console.log('ressssPhoto', res.assets[0].base64);
      }
      await getData('user').then(async resp => {
        await axios
          .post(`${baseUrl}/api/posts/vehicle/photo/${resp?.id}`, {
            _id: `${itemData?._id}`,
            fotoKendaraan: `data:${res?.assets[0]?.type};base64, ${res?.assets[0]?.base64}`,
          })
          .then(respon => {
            console.log('sukses ganti foto', respon);
          })
          .catch(error => {
            console.log('error ganti foto', error);
          });
      });
    });
  };

  const getDataItem = () => {
    getData('itemVehicle').then(resp => {
      setItemData(resp);
    });
  };

  useEffect(() => {
    getDataItem();
  });

  return (
    <SafeAreaView style={styles.page}>
      <GestureHandlerRootView style={styles.page}>
        {/* {backgroundColor: isOpen ? '#75757580' : '#FFFFFF'} */}
        <Header
          title="Detail Kendaraan"
          onBack={() => navigation.replace('Dashboard')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.detailsVehicleContainer}>
            <View style={styles.wrapperDetailsVehicle}>
              <TextInput
                style={styles.inputTitle}
                placeholder={
                  selectedVehicle?.NamaKendaraan
                    ? `${selectedVehicle?.NamaKendaraan}`
                    : 'Nama Kendaraan'
                }
                placeholderTextColor={
                  selectedVehicle?.NamaKendaraan ? '#242424' : '#D9D9D9'
                }
                value={myValue}
                onChangeText={value => setMyValue(value)}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.renameContainer}
                onPress={() => updateName()}>
                <IconEditRename />
              </TouchableOpacity>
            </View>
            {/* <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}> */}
            {/* <TouchableOpacity
              activeOpacity={0.7}
              // onPress={() => openGallery()}
              onPress={() => getImage()}> */}
            {selectedVehicle?.fotoKendaraan[0] ? (
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => changeImage()}>
                <Image style={styles.image} source={{uri: photo}} />
              </TouchableOpacity>
            ) : (
              <View style={styles.addImageContainer}>
                <AddImageVehicle />
              </View>
            )}
            {/* </TouchableOpacity> */}
            {/* <AddImageVehicle
                title={'Tambah Foto Belakang'}
                source={ImageNobg}
              />
              <AddImageVehicle
                title={'Tambah Foto Samping Kanan'}
                source={ImageNobg}
              />
              <AddImageVehicle
                title={'Tambah Foto Samping Kiri'}
                source={ImageNobg}
              /> */}
            {/* </ScrollView> */}
            <View style={styles.detailsContainer}>
              <Text style={styles.estimationContainer}>
                *estimasi total pembayaran
              </Text>
              <View style={styles.paymentStatusContainer}>
                <Text style={styles.titlePayment}>Rp -</Text>
                <View style={styles.wrapperPaymentStatus}>
                  {/* <Text style={styles.titlePaymentStatus}>Belum dibayar</Text> */}
                  {selectedVehicle?.KodeBayar === '-' ? (
                    <View style={styles.paymnetStatusContainerLunas}>
                      <Text style={styles.titlePaymentStatusLunas}>Lunas</Text>
                    </View>
                  ) : (
                    <View style={styles.paymnetStatusContainer}>
                      <Text style={styles.titlePaymentStatus}>
                        Belum dibayar
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              <Text style={styles.titleRemindersDate}>
                Batas Pembayaran{' '}
                <Text style={styles.titlePajak}>
                  {selectedVehicle?.JTPajak}
                </Text>
              </Text>
              <View style={styles.dataVehicleContainer}>
                <View style={styles.dataVehicle}>
                  <Text style={styles.titleDataVehicle}>NOMOR MESIN</Text>
                  <Text style={styles.titleOutputVehicle}>
                    {selectedVehicle?.NomorMesin}
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
              <View style={styles.dataVehicleContainer}>
                <View style={styles.dataVehicle}>
                  <Text style={styles.titleDataVehicle}>NOMOR POLISI</Text>
                  <Text style={styles.titleOutputVehicle}>
                    {`${
                      selectedVehicle?.NRKB?.match(/[a-zA-Z]+/g)?.[0]
                    } ${selectedVehicle?.NRKB?.match(/\d+/g)} ${
                      selectedVehicle?.NRKB?.match(/[a-zA-Z]+/g)?.[1]
                    }`}
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
              <View style={styles.dataVehicleContainer}>
                <View style={styles.dataVehicle}>
                  <Text style={styles.titleDataVehicle}>TAHUN PEMBUATAN</Text>
                  <Text style={styles.titleOutputVehicle}>
                    {selectedVehicle?.TahunBuat}
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
              <View style={styles.dataVehicleContainer}>
                <View style={styles.dataVehicle}>
                  <Text style={styles.titleDataVehicle}>MASA BERLAKU STNK</Text>
                  <Text style={styles.titleOutputVehicle}>-</Text>
                </View>
                <View style={styles.line} />
              </View>
              <View style={styles.dataVehicleContainer}>
                <View style={styles.dataVehicle}>
                  <Text style={styles.titleDataVehicle}>TYPE</Text>
                  <Text style={styles.titleOutputVehicle}>
                    {selectedVehicle?.TipeKendaraan}
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
            </View>
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
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
    flex: 1,
    justifyContent: 'center',
  },
  renameContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 310,
    height: 250,
    borderRadius: 8,
  },
  addImageContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: 24,
  },
  paymentStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePayment: {
    fontSize: 24,
    fontFamily: fonts.Poppins.medium,
    color: '#9A0000',
  },
  wrapperPaymentStatus: {
    // borderWidth: 1,
    // borderColor: '#D53931',
    // backgroundColor: '#FFF3F3',
    // width: 110,
    paddingVertical: 6,
    alignItems: 'center',
    // borderRadius: 8,
  },
  titlePaymentStatus: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#D53931',
  },
  titleRemindersDate: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#757575',
  },
  titlePajak: {
    textDecorationLine: 'underline',
  },
  dataVehicleContainer: {
    marginTop: 28,
  },
  dataVehicle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleDataVehicle: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#242424',
  },
  titleOutputVehicle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
  line: {
    borderWidth: 3,
    borderColor: '#D9D9D940',
    marginTop: 12,
  },
  button: {
    paddingHorizontal: 25,
    marginBottom: 10,
  },
  paymnetStatusContainer: {
    borderWidth: 1,
    borderColor: '#D53931',
    backgroundColor: '#FFF3F3',
    width: 110,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 8,
  },
  paymnetStatusContainerLunas: {
    borderWidth: 1,
    borderColor: '#34A853',
    backgroundColor: '#85CB98',
    width: 110,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 8,
  },
  titlePaymentStatusLunas: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#2A8642',
  },
  estimationContainer: {
    // backgroundColor: 'red',
    fontFamily: fonts.Poppins.medium,
    color: '#757575',
  },
});
