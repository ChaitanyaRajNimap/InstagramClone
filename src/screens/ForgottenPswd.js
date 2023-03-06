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

const ForgottenPswd = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userNameErr, setUserNameErr] = useState(null);

  const findAccount = () => {
    let error = validation.validateUserName(userName);

    if (!error) {
      setUserName(null);
      Alert('Account found!');
    }
  };

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.conatiner}>
            <CustomNavigationBar back={true} headername="" />
            <Text style={styles.heading}>Find your account</Text>
            <Text style={styles.text}>
              Enter your username, email address or mobile number
            </Text>
            <TouchableOpacity>
              <Text style={styles.needHelp}>Need more help?</Text>
            </TouchableOpacity>
            <KeyboardAvoidingView enabled>
              {/* <CustomTextInput
                label="Username, email address or mobile..."
                customStyles={styles.inputTextContainer}
                onChangeText={value => {
                  setUserName(value);
                  let error = validation.validateUserName(value);
                  setUserNameErr(error);
                }}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
              /> */}
              <CustomTextInput
                label="Username, email address or mobile..."
                customStyles={styles.inputConatiner}
                onChangeText={value => {
                  setUserName(value);
                  let error = validation.validateUserName(value);
                  setUserNameErr(error);
                }}
              />
              <Text style={styles.error}>{userNameErr}</Text>
              <CustomLongBtn
                title="Find Account"
                onPress={findAccount}
                customStyles={styles.findBtnContainer}
              />
              <CustomTransparentBtn
                title="Log In With Facebook"
                onPress={() => {}}
              />
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ForgottenPswd;

const styles = StyleSheet.create({
  linearGradient: {padding: 20},
  conatiner: {flex: 1},
  heading: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 15,
    color: COLORS.white,
    fontSize: 18,
  },
  needHelp: {
    marginBottom: 25,
    color: COLORS.blue100,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputTextContainer: {marginBottom: 8},
  inputConatiner: {
    padding: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.white,
    backgroundColor: COLORS.whiteTransparent,
  },
  findBtnContainer: {marginBottom: 15},
  error: {
    marginBottom: 5,
    color: COLORS.red,
  },
});
