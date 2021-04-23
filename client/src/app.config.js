export default {
  pages: ['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  cloud: true,
  permission: {
    'scope.userLocation': {
      desc: '您的位置信息将用于搜索附近美食等信息'
    }
  }
};
