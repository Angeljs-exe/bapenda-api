import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {fonts} from '../../../assets';
import Login from '../../../pages/Login';

const HomeProfile = ({onPress}) => {
  return (
    <View style={styles.profileContainer}>
      <Button click="iconOnly" icon="iconProfile" onPress={onPress} />
      <View style={styles.profileNameContainer}>
        <Text style={styles.profileName}>Halo,</Text>
        <Text style={styles.userEmail}>johndoe@gmail.com</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileNameContainer: {
    marginLeft: 8,
  },
  profileName: {
    fontSize: 18,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
  },
  userEmail: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#9E9E9E',
  },
});
