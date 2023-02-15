import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, Animated} from 'react-native';

const CustomTextInput = ({label, customStyles, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.inputConatiner, {...customStyles}]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        style={styles.textInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={text => props.onChangeText(text)}
        value={props.value}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputConatiner: {
    marginBottom: 15,
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
});
