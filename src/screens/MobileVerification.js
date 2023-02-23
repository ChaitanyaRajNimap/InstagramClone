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

const MobileVerification = ({navigation, route}) => {
  const {mobileNo} = route.params;

  const [otpInput, setOtpInput] = useState(null);
  const [otpInputError, setOtpInputError] = useState(null);

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.container}>
          <View style={styles.container}>
            <CustomNavigationBar back={true} headername="" />
            <Text style={styles.heading}>Enter the confirmation code</Text>
            <Text style={styles.text}>
              To confirm your account, enter the 6-digit code that we sent to
              +91{mobileNo}
            </Text>
            <KeyboardAvoidingView enabled>
              <CustomTextInput
                label="Confirmation code"
                customStyles={styles.inputTextContainer}
                onChangeText={value => {
                  setOtpInput(value);
                  let error = validation.validateField(value);
                  setOtpInputError(error);
                }}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
              />
              {otpInputError ? (
                <Text style={styles.error}>
                  Code is required. Check your email or text message to find the
                  code.
                </Text>
              ) : null}
              <CustomLongBtn
                title="Next"
                onPress={() => {}}
                customStyles={styles.findBtnContainer}
              />
              <CustomTransparentBtn
                title="I Didn't Receive the Code"
                onPress={() => {}}
              />
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MobileVerification;

const styles = StyleSheet.create({
  linearGradient: {padding: 20, flex: 1},
  container: {flex: 1},
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
  findBtnContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  error: {
    marginBottom: 20,
    color: COLORS.red,
  },
  textMsg: {
    marginBottom: 20,
    color: COLORS.white,
  },
});
