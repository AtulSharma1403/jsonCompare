function compareObjects(obj1, obj2) {
    for (let key in obj1) {
      if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          if (!compareArrays(obj1[key], obj2[key])) {
            return false;
          }
        } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
          if (!compareObjects(obj1[key], obj2[key])) {
            return false;
          }
        } else if (obj1[key] !== obj2[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }

  function compareArrays(array1, array2) {
    return array1.length === array2.length && array1.every((element, index) => element === array2[index]);
  }

module.exports = compareObjects;