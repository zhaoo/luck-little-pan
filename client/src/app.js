import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  render () {
    return this.props.children
  }
}

export default App
