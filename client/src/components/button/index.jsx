import { View } from '@tarojs/components';
import './index.scss';

export default function Button({ children, onClick }) {
  return (
    <View className='button' onClick={onClick}>
      {children}
    </View>
  );
}
