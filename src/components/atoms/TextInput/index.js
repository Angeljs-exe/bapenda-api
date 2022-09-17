import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';
import {fonts} from '../../../assets';

const TextInput = ({title, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Input style={styles.inputText} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 15,
  },
  inputText: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 41,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 10,
    marginTop: 5,
  },
});
