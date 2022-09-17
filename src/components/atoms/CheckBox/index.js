import {Text, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {fonts} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CheckBoxx = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <View style={styles.pageCekBox}>
        <View style={styles.cekBoxConatiner}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.titleCekBox}>Ingat Saya</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CheckBoxx;

const styles = StyleSheet.create({
  pageCekBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cekBoxConatiner: {
    flexDirection: 'row',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCekBox: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#000C14BF',
    marginLeft: 5,
  },
  forgetPassContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
