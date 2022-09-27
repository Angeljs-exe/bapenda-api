import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Button} from '../../components';
import {fonts} from '../../assets';

const inputs = Array(6).fill('');
let newInputIndex = 0;

// const isObjValid = obj => {
//   return Object.values(obj).every(val => val.trim());
// };

const InputOTP = ({onChangeText, onPress}) => {
  const input = useRef();
  const [otp, setOtp] = useState({0: '', 1: '', 2: '', 3: '', 4: '', 5: ''});
  const [nextInputIndex, setNextInputIndex] = useState(0);

  const handleChangeText = (text, index) => {
    const newOTP = {...otp};
    newOTP[index] = text;
    setOtp(newOTP);

    Keyboard.dismiss();

    const lastInputIndex = inputs.length - 1;
    if (!text) {
      newInputIndex = index === 0 ? 0 : index - 1;
    } else {
      newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    }
    setNextInputIndex(newInputIndex);
  };

  // const submitOTP = () => {
  //   Keyboard.dismiss();

  //   if (isObjValid(otp)) {
  //     let val = '';

  //     Object.values(otp).forEach(v => {
  //       val += v;
  //     });
  //   }
  // };

  useEffect(() => {
    input.current.focus();
  }, [nextInputIndex]);

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          {inputs.map((inp, index) => {
            return (
              <View key={index.toString()} style={styles.inputOtpContainer}>
                <TextInput
                  value={otp[index]}
                  key={index.toString()}
                  placeholder="-"
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={text =>
                    handleChangeText(text, index, onChangeText)
                  }
                  ref={newInputIndex === index ? input : null}
                  style={styles.inputOtp}
                />
              </View>
            );
          })}
        </View>
      </KeyboardAvoidingView>
      <View style={styles.wrapperCodeOTP}>
        <Text style={styles.wrapperCode}>
          Belum menerima konfirmasi kode OTP ?{' '}
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.sendAgain}> Kirim Ulang</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Konfirmasi" onPress={onPress} />
      </View>
    </>
  );
};

export default InputOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginTop: 80,
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
    marginTop: 80 / 2,
  },
});
