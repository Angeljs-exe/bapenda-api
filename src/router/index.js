import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Login,
  Otp,
  SignUp,
  Dashboard,
  AddVehicle,
  InputVehicle,
  News,
  ListVehicle,
  RegisCompleted,
  NewsDetails,
  DetailsVehicle,
  SplashScreen,
  Notification,
  Profile,
  EditProfile,
  EditPassword,
  FAQs,
  ForgetPassword,
  VerificationCodeOTP,
  PersonalData,
  RegisError,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListVehicle"
        component={ListVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputVehicle"
        component={InputVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisCompleted"
        component={RegisCompleted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsVehicle"
        component={DetailsVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditPassword"
        component={EditPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Faqs"
        component={FAQs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerificationCodeOTP"
        component={VerificationCodeOTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalData"
        component={PersonalData}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisError"
        component={RegisError}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
