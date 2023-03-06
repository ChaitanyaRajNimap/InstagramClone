import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import GLOBALSTYLES from '../utils/styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomNavigationBar from '../components/CustomNavigationBar';
import CustomTextInput from '../components/CustomTextInput';
import CustomLongBtn from '../components/CustomLongBtn';
import validation from '../utils/validation';
import {COLORS} from '../utils/colors';

const CreatePswd = ({navigation}) => {
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  //For handling Next
  const handleNext = () => {
    let error = validation.validatePassword(password);
    setPasswordError(error);
    if (!error) {
      console.log('Password : ', password);
      navigation.navigate('SaveLoginInfo');
    }
  };

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <View style={styles.container}>
          <CustomNavigationBar back={true} headername="" />
          <Text style={styles.heading}>Create a password</Text>
          <Text style={styles.text}>
            Create a password with at least 6 letters and numbers. It should be
            something that others can't guess.
          </Text>
          <KeyboardAvoidingView enabled>
            {/* <CustomTextInput
              label="Password"
              customStyles={styles.inputTextContainer}
              onChangeText={value => {
                setPassword(value);
                let error = validation.validatePassword(value);
                setPasswordError(error);
              }}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
            /> */}
            <CustomTextInput
              label="Password"
              customStyles={styles.inputConatiner}
              onChangeText={value => {
                setPassword(value);
                let error = validation.validatePassword(value);
                setPasswordError(error);
              }}
            />
            {passwordError ? (
              <Text style={styles.error}>{passwordError}</Text>
            ) : null}
            <CustomLongBtn
              title="Next"
              onPress={handleNext}
              customStyles={styles.nextBtnContainer}
            />
          </KeyboardAvoidingView>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={styles.alreadyAcc}
              onPress={() => navigation.navigate('LogIn')}>
              <Text style={styles.alreadyAccText}>
                Already have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CreatePswd;

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
  inputConatiner: {
    padding: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.white,
    backgroundColor: COLORS.whiteTransparent,
  },
  error: {marginBottom: 20, color: COLORS.red},
  nextBtnContainer: {marginTop: 10, marginBottom: 15},
  alreadyAcc: {alignItems: 'center'},
  alreadyAccText: {
    color: COLORS.blue100,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
