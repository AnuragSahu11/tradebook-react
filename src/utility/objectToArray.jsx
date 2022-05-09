const objectToArray = (obj) => {
  return Object.keys(obj).map((key) => {
    return { ...obj[key], key: key };
  });
};

const coinIdList = (arr) => {
  let tempArr = arr.reduce((acc, crr) => {
    return acc.includes(crr.id) ? acc : [...acc, crr.id];
  }, []);
  return tempArr.join(",");
};

export { objectToArray, coinIdList };
