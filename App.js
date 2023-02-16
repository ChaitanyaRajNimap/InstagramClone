import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './src/screens/LogIn';
import ForgottenPswd from './src/screens/ForgottenPswd';
import SignUpWithMobile from './src/screens/SignUpWithMobile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
