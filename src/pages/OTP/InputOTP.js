import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {fonts} from '../../assets';

const InputOTP = () => {
  const [touchNumber, setTouchNumber] = useState(false);

  const touchOTPSubmit = () => {
    setTouchNumber(true);
  };

  const oneInput = useRef();
  const twoInput = useRef();
  const threeInput = useRef();
  const fourInput = useRef();
  const fivetInput = useRef();

  return (
    <>
      <View style={styles.bgOTPContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={touchOTPSubmit}>
          {touchNumber && (
            <TextInput
              style={styles.inputOtp}
              keyboardType="number-pad"
              maxLength={1}
              ref={oneInput}
              onChangeText={text => {
                text && twoInput.current.focus();
              }}
            />
          )}
          {!touchNumber && <View style={styles.bgOTP} />}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={touchOTPSubmit}>
          {touchNumber && (
            <TextInput
              style={styles.inputOtp}
              keyboardType="number-pad"
              maxLength={1}
              ref={twoInput}
              onChangeText={text => {
                text ? threeInput.current.focus() : oneInput.current.focus();
              }}
            />
          )}
          {!touchNumber && <View style={styles.bgOTP} />}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={touchOTPSubmit}>
          {touchNumber && (
            <TextInput
              style={styles.inputOtp}
              keyboardType="number-pad"
              maxLength={1}
              ref={threeInput}
              onChangeText={text => {
                text ? fourInput.current.focus() : twoInput.current.focus();
              }}
            />
          )}
          {!touchNumber && <View style={styles.bgOTP} />}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={touchOTPSubmit}>
          {touchNumber && (
            <TextInput
              style={styles.inputOtp}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourInput}
              onChangeText={text => {
                text ? fivetInput.current.focus() : threeInput.current.focus();
              }}
            />
          )}
          {!touchNumber && <View style={styles.bgOTP} />}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={touchOTPSubmit}>
          {touchNumber && (
            <TextInput
              style={styles.inputOtp}
              keyboardType="number-pad"
              maxLength={1}
              ref={fivetInput}
              onChangeText={text => {
                !text && fourInput.current.focus();
              }}
            />
          )}
          {!touchNumber && <View style={styles.bgOTP} />}
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperCodeOTP}>
        <Text style={styles.wrapperCode}>
          Belum menerima konfirmasi kode OTP ?{' '}
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.sendAgain}> Kirim Ulang</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default InputOTP;

const styles = StyleSheet.create({
  bgOTPContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputOtp: {
    width: 60,
    height: 74,
    fontSize: 38,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
  },
  bgOTP: {
    width: 60,
    height: 74,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },

  wrapperCodeOTP: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  wrapperCode: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#999EA1',
  },
  sendAgain: {
    fontSize: 12,
    fontFamily: fonts.Poppins.semibold,
    color: '#00ADF8',
  },
});
