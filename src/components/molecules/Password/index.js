import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fonts, IconEye, IconEyeOff} from '../../../assets';

const Password = ({title, placeholder}) => {
  const [showPass, setShowPass] = useState(false);

  const touchEye = () => {
    setShowPass(!showPass);
  };

  return (
    <View style={styles.pagePassword}>
      <Text style={styles.titlePassword}>{title}</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder={placeholder}
          secureTextEntry={showPass ? false : true}
        />
        <TouchableOpacity onPress={() => touchEye()}>
          {showPass ? <IconEye /> : <IconEyeOff />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  pagePassword: {
    marginTop: 16,
  },
  titlePassword: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 10,
    height: 41,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginTop: 5,
  },
  inputPassword: {
    flex: 1,
  },
});
