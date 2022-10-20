import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fonts, ImageList, ImageNobg} from '../../assets';
import {storeData} from '../../utils';

const ListVehicleCard = ({item, navigation}) => {
  var na = item.NRKB.match(/[a-zA-Z]+/g)[0];
  var nb = item.NRKB.match(/\d+/g);
  var nc = item.NRKB.match(/[a-zA-Z]+/g)[1];

  const [showPhoto, setShowPhoto] = useState(ImageNobg);

  // const nextPage = () => {};

  useEffect(() => {
    setShowPhoto(!showPhoto);
  }, []);

  console.log('resssITEM', item);

  return (
    <View style={styles.wrapperListVehicle}>
      <View style={styles.listVehicleContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            const dataItem = {
              JTPajak: item.JTPajak,
              KodeBayar: item.KodeBayar,
              NRKB: item.NRKB,
              NomorMesin: item.NomorMesin,
              TahunBuat: item.TahunBuat,
              TipeKendaraan: item.TipeKendaraan,
              _id: item._id,
            };
            storeData('itemVehicle', dataItem);
            navigation.navigate('DetailsVehicle', dataItem);
          }}>
          <View style={styles.listVehicle}>
            <View style={styles.imgBackground}>
              {showPhoto ? (
                <Image style={styles.image} source={{uri: !showPhoto}} />
              ) : (
                <Image
                  style={styles.image}
                  source={{uri: item.fotoKendaraan[0]}}
                />
              )}
              {/* {showPhoto && (
                <Image
                  style={styles.image}
                  source={{uri: item.fotoKendaraan[0]}}
                />
              )}
              {!showPhoto && <Image style={styles.image} source={ImageNobg} />} */}
            </View>
            <View>
              <Text style={styles.brandVehicle}>{item.NamaKendaraan}</Text>
              <Text style={styles.numberPolice}>{`${na} ${nb} ${nc}`}</Text>
              {/* <Text style={styles.numberPolice}>{item.NRKB}</Text> */}
              <View style={styles.line} />
              <View>
                <View style={styles.containerDatePayment}>
                  <Text style={styles.dueDate}>Jatuh Tempo {item.JTPajak}</Text>
                  {/* <Text style={styles.paymentStatus(paymentStatus)}>
                {paymentStatus}
              </Text> */}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListVehicleCard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapperListVehicle: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  listVehicleContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 8,
    width: '100%',
    height: 114,
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: {height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  listVehicle: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  imgBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginRight: 12,
  },
  image: {
    width: 80,
    height: 72,
    borderRadius: 8,
  },
  brandVehicle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#17191C',
  },
  numberPolice: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#17191C',
    marginTop: 2,
  },
  line: {
    borderWidth: 2,
    borderColor: '#A61E22',
    width: 249,
    alignItems: 'center',
    marginTop: 8,
  },
  containerDatePayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  dueDate: {
    fontSize: 11,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
  },
  // paymentStatus: paymentStatus => ({
  //   fontSize: 10,
  //   fontFamily: fonts.Poppins.medium,
  //   color: paymentStatus === 'Belum dibayar' ? '#CA0B00' : '#34A853',
  // }),
});
