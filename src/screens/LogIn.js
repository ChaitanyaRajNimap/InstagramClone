import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import GLOBALSTYLES from '../utils/styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput';
import CustomLongBtn from '../components/CustomLongBtn';

const LogIn = ({navigation}) => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={['#0f3d3d', '#00334d']}
        style={[GLOBALSTYLES.rootContainer, styles.conatiner]}>
        <Text style={styles.language}>English (India)</Text>
        <View>
          <Image
            source={require('../assests/images/insta-icons/icons8-instagram-96.png')}
          />
        </View>
        <View>
          <CustomTextInput
            label="Username, email address or mobile number"
            value={inputs.username}
            onChangeText={value =>
              setInputs(prevValues => {
                return {
                  ...prevValues,
                  username: value,
                };
              })
            }
          />
        </View>
        <View>
          <CustomTextInput
            label="Password"
            value={inputs.password}
            onChangeText={value =>
              setInputs(prevValues => {
                return {
                  ...prevValues,
                  password: value,
                };
              })
            }
          />
        </View>
        <CustomLongBtn title="Log In" onPress={() => {}} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  language: {color: 'rgba(255, 255, 255,0.2)'},
  conatiner: {padding: 20},
});
