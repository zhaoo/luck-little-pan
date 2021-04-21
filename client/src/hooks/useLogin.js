import { useEffect } from "react";
import Taro from "@tarojs/taro";

export default function useLogin() {
  useEffect(() => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        console.log(res);
      });
    wx.getUserProfile({
      success: (res) => {
        console.log(res)
      }
    })
  }, []);

  return 1;
}
