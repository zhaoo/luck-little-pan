import { useEffect } from 'react';
import Taro from '@tarojs/taro';

export default function App({ children }) {
  useEffect(() => {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init();
    }
  }, []);

  return children;
}
