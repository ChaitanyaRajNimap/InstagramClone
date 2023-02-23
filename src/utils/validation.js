//Message const to display
const message = {
  EMPTY_FIELD: 'This Feild is Required.',
  EMPTY_MOBILE: 'Mobile number required.',
  INVALID_FIELD: 'Please enter valid data.',
  INVALID_PASSWORD: 'Please enter valid password.',
  INVALID_MOBILE:
    'Looks like your mobile number may be incorrect. Try entering your full number, including the country code.',
};

//RegEx for inputs
const userNameRegEx =
  /^(([a-z]([a-z0-9_-]{3,15}))|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|((\+\d{1,3}[- ]?)?\d{10}))$/i;
const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])(?!.*\s).{4,6}$/;
const mobileRegEx = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

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
