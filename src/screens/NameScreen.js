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

const NameScreen = ({navigation}) => {
  const [fullName, setFullName] = useState(null);
  const [fullNameError, setFullNameError] = useState(null);

  //For handling Next
  const handleNext = () => {
    let error = validation.validateField(fullName);
    setFullNameError(error);
    if (!error) {
      console.log('Full Name: ', fullName);
      navigation.navigate('CreatePswd');
    }
  };

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <View style={styles.container}>
          <CustomNavigationBar back={true} headername="" />
          <Text style={styles.heading}>What's your name?</Text>
          <KeyboardAvoidingView enabled>
            {/* <CustomTextInput
              label="Full name"
              customStyles={styles.inputTextContainer}
              onChangeText={value => {
                setFullName(value);
                let error = validation.validateField(value);
                setFullNameError(error);
              }}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
            /> */}
            <CustomTextInput
              label="Full name"
              customStyles={styles.inputConatiner}
              onChangeText={value => {
                setFullName(value);
                let error = validation.validateField(value);
                setFullNameError(error);
              }}
            />
            {fullNameError ? (
              <Text style={styles.error}>Please enter your full name</Text>
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

export default NameScreen;

const styles = StyleSheet.create({
  linearGradient: {padding: 20, flex: 1},
  container: {flex: 1},
  heading: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputTextContainer: {marginTop: 25, marginBottom: 8},
  inputConatiner: {
    padding: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.white,
    backgroundColor: COLORS.whiteTransparent,
  },
  error: {marginBottom: 5, color: COLORS.red},
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
