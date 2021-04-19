const createValidation = (...validator) => (value) => {
  const result = validator
  .reduce((acc, curValue) => {
    return [...acc, curValue(value)];
  }, [])
  .filter((curValue) => curValue)
  return result.length > 0 ? result : null;
};

const createValidator = (validate, errorMess) => (value) => {
  return validate(value) ? null : errorMess;
};

const hasEmail = (email) => {
  return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
};

const hasNoEmpty = (value) => {
  return value.trim();
};

const hasAdult = (age) => {
  return age >= 18;
};

module.exports = {
  createValidation,
  createValidator,
  hasEmail,
  hasNoEmpty,
  hasAdult,
}
