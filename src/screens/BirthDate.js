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

const BirthDate = ({navigation}) => {
  const [birthDate, setBirthDate] = useState(null);
  const [birthDateError, setBirthDateError] = useState(null);

  //For handling Next
  const handleNext = () => {
    let error = validation.validateField(birthDate);
    setBirthDateError(error);
    if (!error) {
      console.log('birthDate : ', birthDate);
      //   navigation.navigate('SaveLoginInfo');
    }
  };

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <View style={styles.container}>
          <CustomNavigationBar back={true} headername="" />
          <Text style={styles.heading}>What's your date of birth?</Text>
          <Text style={styles.text}>
            Use your own date of birth, even if this account is for a business,a
            pet or something else. No one will see this on your profile.
            <Text style={{color: COLORS.blue100}}>
              Why do I need to provide my date of birth?
            </Text>
          </Text>
          <KeyboardAvoidingView enabled>
            <CustomTextInput
              label="Birthday (0 year old)"
              customStyles={styles.inputTextContainer}
              onChangeText={value => {
                setBirthDate(value);
                let error = validation.validateField(value);
                setBirthDateError(error);
              }}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
            />
            {birthDateError ? (
              <Text style={styles.error}>{birthDateError}</Text>
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

export default BirthDate;

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
