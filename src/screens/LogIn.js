import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import GLOBALSTYLES from '../utils/styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomLongBtn from '../components/CustomLongBtn';
import CustomTransparentBtn from '../components/CustomTransparentBtn';
import validation from '../utils/validation';

const LogIn = ({navigation}) => {
  //For storing inputs
  const [inputs, setInputs] = useState({
    username: null,
    password: null,
  });

  const [error, setError] = useState({
    userNameErr: null,
    passwordErr: null,
  });

  //Ref for inputs
  const userNameRef = createRef();
  const passwordRef = createRef();

  //Funtion for login
  const onLogIn = () => {
    let userNameErr = validation.validateUserName(inputs.username);
    let passwordErr = validation.validatePassword(inputs.password);

    if (!userNameErr && !passwordErr) {
      setInputs(prevValues => {
        return {
          username: null,
          password: null,
        };
      });
      alert('User Logged In!');
    }
  };

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={['#0f3d3d', '#00334d']}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.conatiner}>
            <Text style={styles.languageText}>English (India)</Text>
            <View style={styles.instaLogo}>
              <Image
                source={require('../assests/images/instagram-logo-80.png')}
              />
            </View>
            <KeyboardAvoidingView enabled>
              <View style={styles.inputConatiner}>
                <Text style={styles.label}>
                  Username, email address or mobile number
                </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={value => {
                    setInputs(prevValues => {
                      return {
                        ...prevValues,
                        username: value,
                      };
                    });
                    let error = validation.validateUserName(value);
                    setError(prevErr => {
                      return {
                        ...prevErr,
                        userNameErr: error,
                      };
                    });
                  }}
                  value={inputs.username}
                  ref={userNameRef}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    passwordRef.current && passwordRef.current.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <Text style={styles.error}>{error.userNameErr}</Text>
              <View style={styles.inputConatiner}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={value => {
                    setInputs(prevValues => {
                      return {
                        ...prevValues,
                        password: value,
                      };
                    });
                    let error = validation.validatePassword(value);
                    setError(prevErr => {
                      return {
                        ...prevErr,
                        passwordErr: error,
                      };
                    });
                  }}
                  value={inputs.password}
                  ref={passwordRef}
                  returnKeyType="next"
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                />
              </View>
              <Text style={styles.error}>{error.passwordErr}</Text>
              <CustomLongBtn title="Log In" onPress={onLogIn} />
              <View style={styles.forgottenTextConatiner}>
                <TouchableOpacity style={styles.forgottenTextBtn}>
                  <Text style={styles.forgottenText}>Forgotten Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.newAccBtnContainer}>
                <CustomTransparentBtn
                  title="Create new account"
                  onPress={() => {}}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={styles.meta}>
              <Image source={require('../assests/images/meta-logo-25.png')} />
              <Text style={styles.metaText}>Meta</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  languageText: {
    marginTop: 25,
    color: 'rgba(255, 255, 255,0.3)',
    textAlign: 'center',
  },
  conatiner: {flex: 1},
  linearGradient: {padding: 20},
  instaLogo: {
    marginVertical: 50,
    alignItems: 'center',
  },
  forgottenTextConatiner: {
    margin: 15,
    alignItems: 'center',
  },
  forgottenTextBtn: {
    width: '60%',
  },
  forgottenText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 700,
  },
  inputConatiner: {
    padding: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255,0.2)',
  },
  label: {color: '#fff'},
  textInput: {
    padding: 0,
    color: '#fff',
    fontSize: 20,
  },
  error: {
    marginBottom: 5,
    color: '#f00',
  },
  newAccBtnContainer: {
    marginTop: 100,
  },
  meta: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaText: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
