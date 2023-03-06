import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './src/screens/LogIn';
import ForgottenPswd from './src/screens/ForgottenPswd';
import SignUpWithMobile from './src/screens/SignUpWithMobile';
import MobileVerification from './src/screens/MobileVerification';
import NameScreen from './src/screens/NameScreen';
import CreatePswd from './src/screens/CreatePswd';
import SaveLoginInfo from './src/screens/SaveLoginInfo';
import BirthDate from './src/screens/BirthDate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        {/* <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgottenPswd"
          component={ForgottenPswd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpWithMobile"
          component={SignUpWithMobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MobileVerification"
          component={MobileVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePswd"
          component={CreatePswd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SaveLoginInfo"
          component={SaveLoginInfo}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="BirthDate"
          component={BirthDate}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
