const memoizeResultCreator = (...fn) => {
  const paramFunc = fn.slice(0, fn.length - 1);
  const resultFunc = fn[fn.length - 1];
  const cache = [];

  let isNeedToChange = false;
  let result;

  return function (value) {
    const res = paramFunc.map((argsFn, index) => {
      if (argsFn(value) !== cache[index]) {
        isNeedToChange = true;
      }
      return argsFn(value);
    });

    if (isNeedToChange) {
      result = resultFunc(...res);
      cache.push(...res);
      isNeedToChange = false;
    }
    return result;
  };
};

// этот вариант прошел только первый тест

// const memoizeResultCreator = (...fn) => {
//   let cache = new Map();
//   const resFn = fn[fn.length - 1]
//   let result;
//   return (args) => {
  
//     if (args in cache) {
//       return cache[args];
//     } else {
//     let arr = [];
//     for (key in args) {
//         arr.push(args[key])
//     }
//       result = resFn(...arr);
//       cache[args] = result;
//       return cache[args];
//     };
//   };
// };

module.exports = {
  memoizeResultCreator,
}
