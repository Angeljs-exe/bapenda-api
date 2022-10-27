import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, Loading, TextInput} from '../../components';
import {fonts, IconProfilePhoto} from '../../assets';
import {getData, storeData} from '../../utils';
import axios from 'axios';
import {baseUrl} from '../../utils/config';
import auth from '@react-native-firebase/auth';

const deleteAccount = async (profile, setLoading, navigation) => {
  setLoading(true);
  console.log('profile', profile);
  try {
    if (profile.uid) {
      await axios
        .post(`${baseUrl}/api/posts/user/delete`, {
          uid: profile.uid,
        })
        .then(res => {
          auth()
            .signOut()
            .then(() => {
              navigation.replace('Login');
              storeData('user', '');
              setLoading(false);
            })
            .catch(error => {
              setLoading(false);
              console.log('error', error);
            });
          console.log('successfully delete account');
        });
    }
  } catch (err) {
    setLoading(false);
    console.log('delete account error', err);
  }
};

const EditProfile = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    nik: '',
    email: '',
    phoneNumber: '',
    uid: '',
  });

  const getDataUser = () => {
    getData('user').then(res => {
      setProfile(res);
    });
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getDataUser();
    });
  }, [navigation]);

  // const changeEmail = () => {
  //   auth().onAuthStateChanged(user => {
  //     if (user) {
  //       user.
  //     }
  //   })
  // }
  return (
    <SafeAreaView style={styles.page}>
      <Header
        title="Detail Profil"
        onBack={() => navigation.navigate('Profile')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.editProfilePhoto}>
          <IconProfilePhoto />
          {/* <Text style={styles.changePhoto}>Ganti Foto</Text> */}
        </View>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.titleNik}>NIK E-KTP</Text>
            <View style={styles.nikContainer}>
              <Text style={styles.textNik}>{profile.nik}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.titleName}>Nama sesuai E-KTP </Text>
            <View style={styles.nameContainer}>
              <Text style={styles.textName}>{profile.name}</Text>
            </View>
          </View>
          <TextInput
            value={profile.email}
            title="Alamat Email"
            placeholder={''}
          />
          <TextInput
            value={profile.phoneNumber}
            title="Nomor Telepon"
            placeholder={''}
          />
          {/* <TextInput title="Alamat" placeholder={''} /> */}
          {/* <View style={styles.button}>
            <Button title="Simpan" />
          </View> */}
          {Platform.OS === 'ios' && (
            <View style={styles.deleteAccountContainer}>
              <TouchableOpacity
                style={styles.deleteAccountButton}
                onPress={() => deleteAccount(profile, setLoading, navigation)}>
                <Text style={styles.deleteAccountLabel}>Hapus Akun</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {loading && <Loading />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  editProfilePhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36 / 2,
  },
  changePhoto: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#B55559',
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
  titleNik: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
  },
  nikContainer: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    borderColor: '#C6C6C6',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 5,
  },
  textNik: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#242424',
  },
  titleName: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#242424',
    marginTop: 17,
  },
  nameContainer: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    borderColor: '#C6C6C6',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 5,
  },
  textName: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#242424',
    textTransform: 'capitalize',
  },

  deleteAccountContainer: {
    width: '100%',
    marginTop: 32,
    alignItems: 'center',
  },
  deleteAccountLabel: {
    color: 'red',
  },
});
