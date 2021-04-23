import { useEffect, useState, useRef } from 'react';
import { View, OpenData, Picker, Text, Button } from '@tarojs/components';
import useDB from '@/hooks/useDB';
import useStorage from '../../hooks/useStorage';
import { setStorageItem } from '../../utils/storage';
import './index.scss';

const buttonStatusMap = {
  ready: '小潘吃什么？',
  pause: '不行换一个！',
  running: '就决定是你啦！'
};

export default function() {
  const dbList = useDB();
  const storageList = useStorage();
  const timmerRef = useRef(null);
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonStatus, setButtonStatus] = useState('ready');
  const [text, setText] = useState('小潘吃什么？');

  useEffect(() => {
    setList([].concat(storageList).concat(dbList));
  }, [dbList, storageList]);

  useEffect(() => {
    if (buttonStatus === 'running') {
      timmerRef.current = setInterval(() => {
        setText(
          list[currentIndex]?.list[
            Math.floor(Math.random() * list[currentIndex]?.list.length)
          ]
        );
      }, 100);
    } else {
      clearInterval(timmerRef.current);
    }
  }, [buttonStatus]);

  return (
    <View className='index'>
      <View className='userinfo'>
        <View className='avatar'>
          <OpenData type='userAvatarUrl' lang='zh_CN' />
        </View>
        <View className='nickname'>
          <OpenData type='userNickName' lang='zh_CN' defaultText='用户' />
        </View>
      </View>
      <Text
        className='text'
        onClick={() => {
          if (Object.values(buttonStatusMap).indexOf(text) < 0) {
            setStorageItem(text);
          }
        }}
      >
        {text}
      </Text>
      <Button
        onClick={() => {
          setButtonStatus(buttonStatus !== 'running' ? 'running' : 'pause');
        }}
      >
        {buttonStatusMap[buttonStatus]}
      </Button>
      <Picker
        mode='selector'
        range={list.map(item => item?.name)}
        onChange={e => setCurrentIndex(e.detail.value)}
      >
        <View>{`{ ${list[currentIndex]?.name} }`}</View>
      </Picker>
    </View>
  );
}
