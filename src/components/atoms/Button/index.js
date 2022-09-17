import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../assets';
import IconOnly from './IconOnly';

const Button = ({title, onPress, click, icon}) => {
  if (click === 'iconOnly') {
    return <IconOnly icon={icon} onPress={onPress} />;
  } else {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#9C1C21',
    paddingVertical: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.Poppins.semibold,
    color: '#FFFFFF',
  },
});
