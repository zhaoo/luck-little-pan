import { useEffect, useState, useRef } from 'react';
import { View, OpenData, Picker, Text } from '@tarojs/components';
import Button from '@/components/button';
import useDB from '@/hooks/useDB';
import useStorage from '@/hooks/useStorage';
import { setStorageItem } from '@/utils/storage';
import { BUTTON_STATUS_MAP } from '@/constants/index';
import './index.scss';

export default function() {
  const dbList = useDB();
  const storageList = useStorage();
  const timmerRef = useRef(null);
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonStatus, setButtonStatus] = useState('ready');
  const [text, setText] = useState(BUTTON_STATUS_MAP['ready']);

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
          if (Object.values(BUTTON_STATUS_MAP).indexOf(text) < 0) {
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
        {BUTTON_STATUS_MAP[buttonStatus]}
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
