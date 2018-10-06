export default (one, two) => {
  if (typeof one !== typeof two) {
    return false;
  }

  if (one === two) {
    return true;
  }

  const stringOne = JSON.stringify(arrayify(one));
  const stringTwo = JSON.stringify(arrayify(two));
  return stringOne === stringTwo;
}

const arrayify = (value) => {
  if (Array.isArray(value)) {
    return value.map(item => arrayify(item));
  }

  if (typeof value === 'object') {
    if (value === null) {
      return null;
    }

    const keys = Object.keys(value);
    keys.sort((one, two) => one < two ? -1 : one > two ? 1 : 0);
    return keys.map(key => ({
      [key]: arrayify(value[key]),
    }));
  }

  return value;
}
