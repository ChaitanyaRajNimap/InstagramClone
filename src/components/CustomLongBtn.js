import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomLongBtn = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomLongBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3333ff',
    borderRadius: 5,
  },
  buttonText: {
    padding: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
