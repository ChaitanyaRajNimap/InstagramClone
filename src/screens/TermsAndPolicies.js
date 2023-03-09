import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
} from 'react-native';
import GLOBALSTYLES from '../utils/styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomNavigationBar from '../components/CustomNavigationBar';
import CustomTextInput from '../components/CustomTextInput';
import CustomLongBtn from '../components/CustomLongBtn';
import validation from '../utils/validation';
import {COLORS} from '../utils/colors';
import DatePicker from 'react-native-date-picker';

const TermsAndPolicies = ({navigation}) => {
  //For handling Next
  const handleNext = () => {
    navigation.navigate('AddProfile');
  };

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <View style={styles.container}>
          <CustomNavigationBar back={true} headername="" />
          <Text style={styles.heading}>
            Agree to Instagram's terms and policies
          </Text>
          <Text style={[styles.text, {marginTop: 15}]}>
            People who use our service may have uploaded your contact
            information to Instagram.
            <Text style={{color: COLORS.blue100}}> Learn more</Text>
          </Text>
          <Text style={styles.text}>
            By tapping <Text style={{fontWeight: 'bold'}}>I agree</Text>, you
            agree to create an account and to Instagram's{' '}
            <Text style={{color: COLORS.blue100}}>
              Terms<Text style={{color: COLORS.white}}>,</Text> Privacy Policy{' '}
              <Text style={{color: COLORS.white}}>and</Text> Cookies Policy
              <Text style={{color: COLORS.white}}>.</Text>
            </Text>
          </Text>
          <Text style={styles.text}>
            The <Text style={{color: COLORS.blue100}}>Privacy Policy</Text>{' '}
            describes the ways we can use the information we collect when you
            create an account. For example, we use this information to provide,
            personalise and improve our products, including ads.
          </Text>
          <CustomLongBtn
            title="Next"
            onPress={handleNext}
            customStyles={styles.nextBtnContainer}
          />
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

export default TermsAndPolicies;

const styles = StyleSheet.create({
  linearGradient: {padding: 20, flex: 1},
  container: {flex: 1},
  heading: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
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
  btnTextStyle: {
    paddingVertical: 5,
    color: COLORS.white,
    fontSize: 20,
    marginLeft: 5,
  },
});
