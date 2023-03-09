//Message const to display
const message = {
  EMPTY_FIELD: 'This Feild is Required.',
  EMPTY_MOBILE: 'Mobile number required.',
  EMPTY_PASSWORD: 'Password cannot be empty.',
  EMPTY_USERNAME: 'Choose a username to continue.',
  INVALID_FIELD: 'Please enter valid data.',
  INVALID_PASSWORD:
    'This password is too short. Create a longer password with at least 6 letters and numbers.',
  INVALID_MOBILE:
    'Looks like your mobile number may be incorrect. Try entering your full number, including the country code.',
  INVALID_USERNAME: `Usernames can only include numbers,letters, \nunderscores and full stops. Please try again.`,
};

//RegEx for inputs
const userNameRegEx =
  /^(([a-z]([a-z0-9_-]{3,15}))|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|((\+\d{1,3}[- ]?)?\d{10}))$/i;
const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])(?!.*\s).{4,6}$/;
const mobileRegEx = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

const validateUserName = value => {
  if (!value) {
    return message.EMPTY_USERNAME;
  } else if (!userNameRegEx.test(value)) {
    return message.INVALID_USERNAME;
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

const validateMobile = value => {
  if (value === null) {
    return message.EMPTY_FIELD;
  } else if (!mobileRegEx.test(value)) {
    return message.INVALID_MOBILE;
  }
  return null;
};

const validateField = value => {
  return value ? null : message.EMPTY_FIELD;
};

const validation = {
  validateUserName,
  validatePassword,
  validateMobile,
  validateField,
};

export default validation;
