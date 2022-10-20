import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Header} from '../../components';
import {fonts, IconEditRename} from '../../assets';
import AddImageVehicle from './AddImageVehicle';
import DetailsContainer from './DetailsContainer';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import PaymentCode from './PaymentCode';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {launchImageLibrary} from 'react-native-image-picker';
import {baseUrl} from '../../utils/config';
import axios from 'axios';
import {getData} from '../../utils';
// import {launchImageLibrary} from 'react-native-image-picker';

const DetailsVehicle = ({navigation}) => {
  const [myValue, setMyValue] = useState('');
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
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
        .then(function (response) {
          setMyValue('');
          // console.log('user', response.data[0]._id);
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
                placeholder="Nama Kendaraan"
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
    flex: 1,
  },
  addImageContainer: {
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 25,
    marginBottom: 10,
  },
});
