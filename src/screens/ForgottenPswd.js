import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import GLOBALSTYLES from '../utils/styles';

const ForgottenPswd = ({navigation}) => {
  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <View style={GLOBALSTYLES.rootContainer}>
        <Text style={GLOBALSTYLES.header}>Forgotten password page</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default ForgottenPswd;
