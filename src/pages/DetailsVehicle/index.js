import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
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
// import {launchImageLibrary} from 'react-native-image-picker';

const DetailsVehicle = ({navigation, route}) => {
  console.log('route', route.params.item);
  const selectedVehicle = route.params.item;

  let [myValue, setMyValue] = useState('');
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [itemData, setItemData] = useState();
  console.log(itemData);

  const snapPoints = ['1%', '70%', '80%'];

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  const updateName = () => {
    getData('user').then(res => {
      console.log(res.id);
      axios
        .post(`${baseUrl}/api/posts/updateName/${res.id}`, {
          _id: `${itemData?._id}`,
          NamaKendaraan: `${myValue}`,
        })
        .then(function (response) {
          setMyValue('');
          console.log('sukses brow');
        })
        .catch(function (error) {
          console.log(error);
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
  }, []);

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
                placeholder={`${selectedVehicle?.NamaKendaraan}`}
                placeholderTextColor="#D9D9D9"
                value={myValue}
                //prettier-ignore
                onChangeText={(value) => setMyValue(value)}
              />
              <TouchableOpacity
                activeOpacity={0.5}
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
            <View style={styles.addImageContainer}>
              <AddImageVehicle />
            </View>
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
              <View style={styles.paymentStatusContainer}>
                <Text style={styles.titlePayment}>Rp -</Text>
                <View style={styles.wrapperPaymentStatus}>
                  <Text style={styles.titlePaymentStatus}>Belum dibayar</Text>
                </View>
              </View>
              <Text style={styles.titleRemindersDate}>Batas Pembayaran</Text>
              <View style={styles.dataVehicleContainer}>
                <View style={styles.dataVehicle}>
                  <Text style={styles.titleDataVehicle}>NOMOR MESIN</Text>
                  <Text style={styles.titleOutputVehicle}>
                    {selectedVehicle.NomorMesin}
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
              <View style={styles.dataVehicleContainer}>
                <View style={styles.dataVehicle}>
                  <Text style={styles.titleDataVehicle}>NOMOR POLISI</Text>
                  <Text style={styles.titleOutputVehicle}>
                    {`${
                      selectedVehicle?.NRKB.match(/[a-zA-Z]+/g)?.[0]
                    } ${selectedVehicle?.NRKB.match(/\d+/g)} ${
                      selectedVehicle?.NRKB.match(/[a-zA-Z]+/g)?.[1]
                    }`}
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
              <View style={styles.dataVehicleContainer}>
                <View style={styles.dataVehicle}>
                  <Text style={styles.titleDataVehicle}>TAHUN PEMBUATAN</Text>
                  <Text style={styles.titleOutputVehicle}>
                    {selectedVehicle.TahunBuat}
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
                    {selectedVehicle.TipeKendaraan}
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
    fontSize: 24,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
    flex: 1,
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
    borderWidth: 1,
    borderColor: '#D53931',
    backgroundColor: '#FFF3F3',
    width: 110,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 8,
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
});
