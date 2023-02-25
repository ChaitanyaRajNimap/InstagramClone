import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import GLOBALSTYLES from '../utils/styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomNavigationBar from '../components/CustomNavigationBar';
import CustomTextInput from '../components/CustomTextInput';
import CustomLongBtn from '../components/CustomLongBtn';
import CustomTransparentBtn from '../components/CustomTransparentBtn';
import validation from '../utils/validation';
import {COLORS} from '../utils/colors';
import auth from '@react-native-firebase/auth';

const SignUpWithMobile = ({navigation}) => {
  const [mobileNo, setMobileNo] = useState(null);
  const [mobileNoErr, setMobileNoErr] = useState(null);

  //For handling Next
  const handleNext = async () => {
    let error = validation.validateMobile(mobileNo);
    setMobileNoErr(error);
    if (!error) {
      try {
        const mobNo = '+91' + mobileNo;
        const response = await auth().signInWithPhoneNumber(mobNo);
        navigation.navigate('MobileVerification', {
          confirmData: response,
          mobileNo: mobileNo,
        });
        console.log('Response from signInWithPhoneNumber', response);
        alert('OTP has been sent on entered number, Please verify it...');
      } catch (err) {
        console.log('Error in mobile auth ', err);
      }
    }
  };

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.conatiner}>
          <View style={styles.conatiner}>
            <CustomNavigationBar back={true} headername="" />
            <Text style={styles.heading}>What's your mobile number?</Text>
            <Text style={styles.text}>
              Enter the mobile number on which you can be contacted. No one will
              see this on your profile.
            </Text>
            <KeyboardAvoidingView enabled>
              <CustomTextInput
                label="Mobile number"
                customStyles={styles.inputTextContainer}
                onChangeText={value => {
                  setMobileNo(value);
                  let error = validation.validateMobile(value);
                  setMobileNoErr(error);
                }}
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
              />
              {mobileNoErr ? (
                <Text style={styles.error}>{mobileNoErr}</Text>
              ) : (
                <Text style={styles.textMsg}>
                  You may receive SMS notifications from us for security and
                  login purposes.
                </Text>
              )}
              <CustomLongBtn
                title="Next"
                onPress={handleNext}
                customStyles={styles.findBtnContainer}
              />
              <CustomTransparentBtn
                title="Sign up with email address"
                onPress={() => {}}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.alreadyAcc}
              onPress={() => navigation.navigate('LogIn')}>
              <Text style={styles.alreadyAccText}>
                Already have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUpWithMobile;

const styles = StyleSheet.create({
  linearGradient: {padding: 20, flex: 1},
  conatiner: {flex: 1},
  heading: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 15,
    marginBottom: 25,
    color: COLORS.white,
    fontSize: 18,
  },
  inputTextContainer: {marginBottom: 8},
  findBtnContainer: {marginBottom: 15},
  error: {
    marginBottom: 20,
    color: COLORS.red,
  },
  textMsg: {
    marginBottom: 20,
    color: COLORS.white,
  },
  alreadyAcc: {
    marginTop: 160,
    alignItems: 'center',
  },
  alreadyAccText: {
    color: COLORS.blue100,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
