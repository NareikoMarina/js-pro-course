const compose = (...funcs) => (data) =>
  funcs.reduce((acc, func) => func(acc), data);

const withProps = (callback) => (props) => callback(props);

const branch = (conditionFunc, trueFunc, falseFunc) => (data) =>
  conditionFunc(data) ? trueFunc(data) : falseFunc(data);

module.exports = {
  compose,
  withProps,
  branch,
}
