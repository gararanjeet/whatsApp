import {MMKV} from 'react-native-mmkv';

import { isEmpty } from './helper';
const storage = new MMKV();

const get = (key, defaultValue = '') => {
  try {
    return storage.getString(key);
  } catch (err) {
    return defaultValue;
  }
};

const getNumber = key => {
  try {
    return storage.getNumber(key);
  } catch (err) {
    return undefined;
  }
};

const getBoolean = (key, defaultValue = true) => {
  try {
    const value = storage.getBoolean(key);
    if (value !== undefined) return value;
    else return defaultValue;
  } catch (err) {
    return defaultValue;
  }
};

const multiGet = (keys = []) => {
  const values = [];
  keys.forEach(key => {
    try {
      values.push([key, get(key)]);
    } catch (err) {
      values.push('');
    }
  });
  return values;
};

const set = (key, value) => {
  try {
    storage.set(key, value);
  } catch (err) {}
};

const multiSet = keyValuePairs => {
  if (!isEmpty(keyValuePairs)) {
    Object.entries(keyValuePairs)?.forEach(([key, value]) => {
      set(key, value);
    });
  }
};

const clearStorage = () => {
  storage.clearAll();
};

const getAllKeys = () => {
  return storage.getAllKeys();
};

export {
  get,
  getBoolean,
  multiGet,
  set,
  multiSet,
  storage,
  clearStorage,
  getAllKeys,
  getNumber,
};
