import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Button, Loading} from '../../components';
import {fonts} from '../../assets';

const inputs = Array(6).fill('');
let newInputIndex = 0;

const isObjValid = obj => {
  return Object.values(obj).every(val => val.trim());
};

const VerificationCodeOTP = ({
  route: {
    params: {phoneNumber, confirmation},
  },
  navigation,
}) => {
  const input = useRef();
  const [code, setCode] = useState({0: '', 1: '', 2: '', 3: '', 4: '', 5: ''});
  const [nextInputIndex, setNextInputIndex] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleChangeText = (text, index) => {
    const newOTP = {...code};
    newOTP[index] = text;
    setCode(newOTP);

    Keyboard.dismiss();

    const lastInputIndex = inputs.length - 1;
    if (!text) {
      newInputIndex = index === 0 ? 0 : index - 1;
    } else {
      newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    }
    setNextInputIndex(newInputIndex);
  };

  const confirmCode = async () => {
    setLoading(true);
    if (isObjValid(code)) {
      let val = '';

      Object.values(code).forEach(v => {
        val += v;
      });

      try {
        setLoading(false);
        await confirmation.confirm(val, code);
        navigation.replace('Dashboard');
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    input.current.focus();
  }, [nextInputIndex]);

  return (
    <>
      <SafeAreaView style={styles.page}>
        <View style={styles.verificationContainer}>
          <Text style={styles.numberPhone}>{phoneNumber}</Text>
          <View style={styles.titleOTPContainer}>
            <Text style={styles.subTitle}>
              Masukkan 6-digit kode OTP yang telah dikirim pada SMS untuk
              melengkapi registrasi akun anda
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView>
          <View style={styles.inputContainer}>
            {inputs.map((inp, index) => {
              return (
                <View key={index.toString()} style={styles.inputOtpContainer}>
                  <TextInput
                    value={code[index]}
                    key={index.toString()}
                    placeholder="-"
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={text => handleChangeText(text, index)}
                    ref={newInputIndex === index ? input : null}
                    style={styles.inputOtp}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.wrapperCodeOTP}>
            <Text style={styles.wrapperCode}>
              Belum menerima konfirmasi kode OTP ?{' '}
            </Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.sendAgain}> Kirim Ulang</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Konfirmasi" onPress={() => confirmCode()} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default VerificationCodeOTP;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  verificationContainer: {
    alignItems: 'center',
    paddingTop: 195,
  },
  numberPhone: {
    fontSize: 30,
    fontFamily: fonts.Poppins.semibold,
    color: '#000000',
  },
  titleOTPContainer: {
    paddingHorizontal: 25,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#999EA1',
    width: 364,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 25,
  },
  inputOtpContainer: {
    width: 50,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputOtp: {
    textAlign: 'center',
    fontSize: 30,
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
  buttonContainer: {
    paddingHorizontal: 25,
    marginTop: 80 / 2,
  },
});
