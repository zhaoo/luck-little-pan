import { useEffect, useState } from 'react';
import { getStorageSync } from '@/utils/storage';

export default function useStorage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const list = getStorageSync();
    if (list.length > 0) {
      setData([{ name: '我的喜欢', list }]);
    }
  }, []);

  return data;
}
