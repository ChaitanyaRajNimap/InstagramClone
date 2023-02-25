import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import GLOBALSTYLES from '../utils/styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomNavigationBar from '../components/CustomNavigationBar';
import CustomLongBtn from '../components/CustomLongBtn';
import CustomTransparentBtn from '../components/CustomTransparentBtn';
import {COLORS} from '../utils/colors';

const SaveLoginInfo = ({navigation}) => {
  //For handling Save
  const handleSave = () => {
    console.log('Save');
    navigation.navigate('BirthDate');
  };

  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <View style={styles.container}>
          <CustomNavigationBar back={true} headername="" />
          <Text style={styles.heading}>Save your login info?</Text>
          <Text style={styles.text}>
            We'll save the login info for {}, so you won't need to enter it next
            time you log in.
          </Text>
          <CustomLongBtn title="Save" onPress={handleSave} />
          <CustomTransparentBtn
            title="Not Now"
            onPress={handleSave}
            customStyles={styles.transBtn}
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

export default SaveLoginInfo;

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
  transBtn: {marginTop: 20},
});
