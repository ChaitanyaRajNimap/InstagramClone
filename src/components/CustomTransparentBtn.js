import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomTransparentBtn = ({title, onPress, customStyles}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {...customStyles}]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomTransparentBtn;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
