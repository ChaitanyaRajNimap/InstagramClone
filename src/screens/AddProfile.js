import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import GLOBALSTYLES from '../utils/styles';
import {COLORS} from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomLongBtn from '../components/CustomLongBtn';
import CustomTransparentBtn from '../components/CustomTransparentBtn';

const AddProfile = () => {
  return (
    <SafeAreaView style={GLOBALSTYLES.safearea}>
      <LinearGradient
        colors={[COLORS.greenGradient, COLORS.blueGradient]}
        style={[GLOBALSTYLES.rootContainer, styles.linearGradient]}>
        <View style={styles.container}>
          <Text style={styles.heading}>Add a profile picture</Text>
          <Text style={styles.text}>
            Add a profile picture so that your friends know it's you. Everyone
            will be able to see your picture.
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AddProfile;

const styles = StyleSheet.create({
  linearGradient: {padding: 20, flex: 1},
  container: {flex: 1},
  heading: {
    marginTop: 40,
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
});
