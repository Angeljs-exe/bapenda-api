import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts, ImageList} from '../../assets';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    brandVehicle: 'Honda CB150R',
    numberPolice: 'DB 5848 C',
    dueDate: '26 Agt 2022',
    paymentStatus: 'Belum dibayar',
  },
];
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bs',
//     brandVehicle: 'Honda CB250R',
//     numberPolice: 'DB 6534 C',
//     dueDate: '30 Sept 2022',
//     paymentStatus: 'Lunas',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bk',
//     brandVehicle: 'Honda CB250R',
//     numberPolice: 'DB 6539 C',
//     dueDate: '30 Sept 2022',
//     paymentStatus: 'Lunas',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bp',
//     brandVehicle: 'Honda CB150R',
//     numberPolice: 'DB 5448 C',
//     dueDate: '26 Jan 2023',
//     paymentStatus: 'Belum dibayar',
//   },
// ];

const ListVehicleCard = ({item}) => (
  <View style={styles.wrapperListVehicle}>
    <View style={styles.listVehicleContainer}>
      <View style={styles.listVehicle}>
        <View style={styles.imgBackground}>
          <ImageList />
        </View>
        <View>
          <Text style={styles.brandVehicle}>{item.NamaKendaraan}</Text>
          <Text style={styles.numberPolice}>{item.NRKB}</Text>
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
    </View>
  </View>
);

// const ListVehicleCard = () => {
//   const renderItem = ({item}) => (
//     <ListVehicle
//       brandVehicle={item.brandVehicle}
//       numberPolice={item.numberPolice}
//       dueDate={item.dueDate}
//       paymentStatus={item.paymentStatus}
//     />
//   );

//   return (
//     <View style={styles.page}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

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
