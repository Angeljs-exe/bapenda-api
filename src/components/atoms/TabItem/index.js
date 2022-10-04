import {TouchableOpacity} from 'react-native';
import React from 'react';
import {IconAddVehicle, IconHome, IconListVehicle} from '../../../assets';

const TabItem = ({title, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return <IconHome />;
    }
    if (title === 'AddVehicle') {
      return <IconAddVehicle />;
    }
    if (title === 'ListVehicle') {
      return <IconListVehicle />;
    }
    return <IconHome />;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;
