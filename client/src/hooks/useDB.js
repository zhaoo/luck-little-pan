import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

export default function useDB() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Taro.cloud
      .callFunction({
        name: "menu"
      })
      .then(res => {
        if (res.result && res.result.data.length > 0) {
          setList(res.result.data)
        }
      });
  }, []);

  return list;
}
