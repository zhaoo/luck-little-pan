import { View, OpenData } from "@tarojs/components";
import "./index.scss";

export default function() {
  return (
    <View className="index">
      <View className="userinfo">
        <View className="avatar">
          <OpenData type="userAvatarUrl" lang="zh_CN" />
        </View>
        <View className="nickname">
          <OpenData type="userNickName" lang="zh_CN" defaultText="用户" />
        </View>
      </View>
    </View>
  );
}
