import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts, IconBack} from '../../../assets';

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.5} onPress={onBack}>
          <View style={styles.iconBack}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    padding: 5,
    marginRight: 25,
  },
  titleHeader: {
    fontSize: 20,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
  },
});
