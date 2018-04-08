const chunkBy = () => {
  const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      if (args in cache) {
        return cache[args];
      }
      else {
        let result = fn.apply(this, args);
        cache[args] = result;
        return result;
      }
    }
  }

  const chunkBy = (array, perRow) => {
    return array.reduce((acc, curr, i, self) => {
      i % perRow === 0 ? acc.push([curr]) : acc[Math.floor(i / perRow)].push(curr);
      return acc;
    }, []);
  }

  return memoize(chunkBy);
}

angular.module('ac-grid').filter('chunkBy', chunkBy);
