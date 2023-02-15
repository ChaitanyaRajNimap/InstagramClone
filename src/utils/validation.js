//Message const to display
const message = {
  EMPTY_FIELD: 'This Feild is Required.',
  INVALID_FIELD: 'Please enter valid data.',
  INVALID_PASSWORD: 'Please enter valid password.',
};

//RegEx for inputs
const userNameRegEx =
  /^(([a-z]([a-z0-9_-]{3,15}))|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|((\+\d{1,3}[- ]?)?\d{10}))$/i;
const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])(?!.*\s).{4,6}$/;

const validateUserName = value => {
  if (!value) {
    return message.EMPTY_FIELD;
  } else if (!userNameRegEx.test(value)) {
    return message.INVALID_FIELD;
  }
  return null;
};

const validatePassword = value => {
  if (!value) {
    return message.EMPTY_FIELD;
  } else if (!passwordRegEx.test(value)) {
    return message.INVALID_PASSWORD;
  }
  return null;
};

const validation = {
  validateUserName,
  validatePassword,
};

export default validation;
