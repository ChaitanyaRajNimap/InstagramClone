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

const BirthDate = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dateToDispaly, setDateToDisplay] = useState(null);

  const [birthDate, setBirthDate] = useState(null);
  const [birthDateError, setBirthDateError] = useState(null);

  // useEffect(() => {
  //   let options = {day: 'numeric', month: 'long', year: 'numeric'};
  //   let formattedDate = date.toLocaleDateString('en-US', options);

  //   setDateToDisplay(formattedDate);
  // }, [date]);

  //For formatting date
  const formatDate = value => {
    let options = {day: 'numeric', month: 'long', year: 'numeric'};
    let formattedDate = value.toLocaleDateString('en-US', options);

    setDateToDisplay(formattedDate);
  };

  //Covert to send in post req
  const convertDateToSend = value => {
    const currentDate = value || date;
    let tempDate = new Date(currentDate);
    let month = '' + (tempDate.getMonth() + 1),
      day = '' + tempDate.getDate(),
      year = tempDate.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  };

  //For handling Next
  const handleNext = () => {
    let error = validation.validateField(birthDate);
    setBirthDateError(error);
    if (!error) {
      console.log('birthDate : ', birthDate);
      navigation.navigate('CreateUsername');
    }
  };

  console.log('ERROR : ', birthDateError);

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
          {/* <KeyboardAvoidingView enabled> */}
          {/* <CustomTextInput
              label="Birthday (0 year old)"
              customStyles={styles.inputTextContainer}
              onChangeText={value => {
                setBirthDate(value);
                let error = validation.validateField(value);
                setBirthDateError(error);
              }}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
            /> */}
          {/* <CustomTextInput
              label="Birthday (0 year old)"
              customStyles={styles.inputConatiner}
              // onChangeText={value => {
              //   setBirthDate(value);
              //   let error = validation.validateField(value);
              //   setBirthDateError(error);
              // }}
            /> */}
          <TouchableOpacity
            style={styles.inputConatiner}
            onPress={() => {
              console.log('Pressed');
              setOpen(true);
            }}>
            <Text style={styles.btnTextStyle}>
              {dateToDispaly ? dateToDispaly : 'Birthday (0 year old)'}
            </Text>
          </TouchableOpacity>
          {birthDateError ? (
            <Text style={styles.error}>{birthDateError}</Text>
          ) : (
            <Text style={styles.error}></Text>
          )}
          <CustomLongBtn
            title="Next"
            onPress={handleNext}
            customStyles={styles.nextBtnContainer}
          />
          {/* </KeyboardAvoidingView> */}
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
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            formatDate(date);
            setBirthDate(convertDateToSend(date));
            let err = validation.validateField(date);
            setBirthDateError(err);
          }}
          onCancel={() => setOpen(false)}
          maximumDate={new Date()}
          theme="dark"
        />
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
