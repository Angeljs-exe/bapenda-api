import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconAddVehicle,
  IconArrow,
  IconHome,
  IconListVehicle,
  IconLocation,
  IconNotif,
  IconProfile,
} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'iconNotif') {
      return (
        <View>
          <IconNotif />
        </View>
      );
    }
    if (icon === 'iconLocation') {
      return (
        <View>
          <IconLocation />
        </View>
      );
    }
    if (icon === 'iconHome') {
      return (
        <View>
          <IconHome />
        </View>
      );
    }
    if (icon === 'iconAddVehicle') {
      return (
        <View>
          <IconAddVehicle />
        </View>
      );
    }
    if (icon === 'iconListVehicle') {
      return (
        <View>
          <IconListVehicle />
        </View>
      );
    }
    if (icon === 'iconProfile') {
      return (
        <View>
          <IconProfile />
        </View>
      );
    }
    if (icon === 'iconArrow') {
      return (
        <View>
          <IconArrow />
        </View>
      );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.iconOnly}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({
  iconOnly: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
