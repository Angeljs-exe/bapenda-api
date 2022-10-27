import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Header, Loading} from '../../components';
import {
  fonts,
  // IconEditPass,
  IconEditProfile,
  IconFAQs,
  IconProfilePhoto,
} from '../../assets';

import auth from '@react-native-firebase/auth';
import {getData, storeData} from '../../utils';

const Profile = ({navigation}) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const getDataUser = () => {
    getData('user').then(res => {
      setProfile(res);
    });
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getDataUser();
    });
  }, []);

  const submitLogout = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        setLoading(false);
        storeData('user', '');
        navigation.replace('Login');
      })
      .catch(error => {
        setLoading(false);
        console.log('error', error);
      });
  };

  return (
    <>
      <SafeAreaView style={styles.page}>
        <Header
          title="Profile"
          onBack={() => navigation.navigate('Dashboard')}
        />
        <View style={styles.profileContainer}>
          <IconProfilePhoto />
          <View style={styles.titleContainer}>
            <Text style={styles.titleName}>{profile?.name}</Text>
            <Text style={styles.titleEmail}>{profile?.email}</Text>
          </View>
        </View>
        <View>
          <View style={styles.line} />
          <View style={styles.menuContainer}>
            <View style={styles.iconContainer}>
              <IconEditProfile />
            </View>
            <View style={styles.textMenuContainer}>
              <Text style={styles.titleMenu}>Detail Profil</Text>
              <Button
                click="iconOnly"
                icon="iconArrow"
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          </View>
          <View style={styles.line} />
          {/* <View style={styles.menuContainer}>
            <IconEditPass />
            <View style={styles.textMenuContainer}>
              <Text style={styles.titleMenu}>Pengaturan Kata Sandi</Text>
              <Button
                click="iconOnly"
                icon="iconArrow"
                onPress={() => navigation.navigate('EditPassword')}
              />
            </View>
          </View> */}
          <View style={styles.line} />
          <View style={styles.menuContainer}>
            <View style={styles.iconContainer}>
              <IconFAQs />
            </View>
            <View style={styles.textMenuContainer}>
              <Text style={styles.titleMenu}>FAQs</Text>
              <Button
                click="iconOnly"
                icon="iconArrow"
                onPress={() => navigation.navigate('Faqs')}
              />
            </View>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.button}>
            <Button title={'Keluar'} onPress={() => submitLogout()} />
          </View>
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>V.2.0</Text>
          </View>
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 45 / 2,
  },
  titleContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  titleName: {
    fontSize: 18,
    fontFamily: fonts.Poppins.semibold,
    color: '#242424',
    textTransform: 'capitalize',
  },
  titleEmail: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#75757580',
    marginBottom: 40,
  },
  line: {
    borderWidth: 1,
    borderColor: '#F5E6E6',
  },
  menuContainer: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMenuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 40,
  },
  titleMenu: {
    fontSize: 16,
    fontFamily: fonts.Poppins.regular,
    color: '#000000',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 46,
  },
  button: {
    paddingHorizontal: 25,
  },
  versionContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  versionText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
