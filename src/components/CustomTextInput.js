import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, Animated} from 'react-native';
import {COLORS} from '../utils/colors';

const CustomTextInput = ({
  label,
  customStyles,
  onChangeText,
  keyboardType = 'default',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState(null);

  const handleFocus = () => setIsFocused(true);
  // const handleBlur = () => {
  //   if (input) {
  //     setIsFocused(false);
  //   }
  // };

  const handleChange = text => {
    onChangeText(text);
    setInput(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        style={[styles.input, isFocused && styles.inputFocus]}
        value={props.value}
        onChangeText={text => {
          handleChange(text);
        }}
        onFocus={handleFocus}
        // onBlur={handleBlur}
      />
      <Text style={[styles.label, isFocused && styles.labelFocus]}>
        {label}
      </Text>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.white,
    alignItems: 'center',
    backgroundColor: COLORS.whiteTransparent,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    color: COLORS.white,
    fontSize: 18,
  },
  inputFocus: {
    paddingTop: 9,
    paddingBottom: 1,
  },
  label: {
    position: 'absolute',
    left: 0,
    top: 12,
    marginLeft: 20,
    color: '#bbb',
    fontSize: 20,
  },
  labelFocus: {
    top: 2,
    marginLeft: 20,
    color: COLORS.white,
    fontSize: 14,
  },
});
