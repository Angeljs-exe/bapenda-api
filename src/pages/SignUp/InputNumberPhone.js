import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../assets';
import CountryCode from '../../assets/CountryCode';

const InputNumberPhone = ({title, placeholder}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'Indonesia'),
  );

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapperContent}>
        <TouchableOpacity style={styles.codePhoneIndo}>
          <Text style={styles.textCode}>{selectedCountry.dial_code}</Text>
        </TouchableOpacity>
        <View style={styles.inputStyle}>
          <TextInput placeholder={placeholder} keyboardType="number-pad" />
        </View>
      </View>
    </View>
  );
};

export default InputNumberPhone;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 15,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codePhoneIndo: {
    paddingHorizontal: 12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 41,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#C6C6C6',
    marginTop: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textCode: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#000000',
  },
  inputStyle: {
    paddingHorizontal: 16,
    height: 41,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    flex: 1,
    marginTop: 5,
  },
});
