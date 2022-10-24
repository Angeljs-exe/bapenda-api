import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import colours from '../../assets/colours';

const InputNumberPhone = ({
  placeholder,
  onChangeText,
  value,
  onFocus = () => {},
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View style={styles.inputStyle}>
        <TextInput
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#D9D9D9"
          keyboardType="number-pad"
          onChangeText={onChangeText}
          {...rest}
          style={styles.inputText}
        />
      </View>
    </>
  );
};

export default InputNumberPhone;

const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    height: 41,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
  inputText: {
    color: '#242424',
  },
});
