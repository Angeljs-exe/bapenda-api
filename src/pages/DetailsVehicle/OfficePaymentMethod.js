import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fonts, IconSelect} from '../../assets';

const OfficePaymentMethod = ({data}) => {
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  const touchPaymentMethod = () => {
    setShowPaymentMethod(!showPaymentMethod);
  };
  return (
    <>
      <View style={styles.howPaymentATMBSGContiner}>
        <View style={styles.howPaymnetATMBSG}>
          <Text style={styles.subTitleHowPayment}>Kantor Bank BSG</Text>
          <TouchableOpacity activeOpacity={0.3} onPress={touchPaymentMethod}>
            <IconSelect />
          </TouchableOpacity>
        </View>
      </View>
      {showPaymentMethod ? (
        <View style={styles.titleContainer}>
          {data.map((val, i) => {
            return (
              <Text key={String(i)} style={styles.title}>
                {val.text}
              </Text>
            );
          })}
        </View>
      ) : (
        ''
      )}
    </>
  );
};

export default OfficePaymentMethod;

const styles = StyleSheet.create({
  howPaymentATMBSGContiner: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CDD1E0',
    width: '100%',
    height: 41,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 12,
  },
  howPaymnetATMBSG: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitleHowPayment: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
  },
  titleContainer: {
    marginTop: 12,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
    width: 310,
  },
});
