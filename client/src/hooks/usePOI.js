import bmap from '../assets/lib/bmap-wx';
import { useEffect, useState } from 'react';

export default function usePOI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const BMap = new bmap.BMapWX({
      ak: 'SIUhx7p8TytUCnBn8iQbxg56aDF3fCjQ'
    });
    BMap.search({
      query: '美食',
      page_size: 100,
      success: res => {
        if (res.wxMarkerData.length > 0) {
          const list = [];
          res.wxMarkerData.forEach(item => {
            list.push(item.title);
          });
          setData([{ name: '附近美食', list }]);
        }
      }
    });
  }, []);

  return data;
}
