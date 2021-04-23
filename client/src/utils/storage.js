import Taro from '@tarojs/taro';

const key = 'favorite';

export const setStorageSync = value => {
  try {
    Taro.setStorageSync(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const setStorageItem = item => {
  const arr = getStorageSync() || [];
  if (arr.indexOf(item) < 0) {
    arr.push(item);
		setStorageSync(arr);
  }
};

export const removeStorageSync = () => {
  try {
    Taro.removeStorageSync(key);
  } catch (e) {
    console.error(e);
  }
};

export const getStorageSync = () => {
  try {
    const value = Taro.getStorageSync(key);
    if (value) {
      return value;
    }
  } catch (e) {
    console.error(e);
  }
};
