import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Audio } from '@tarojs/components'
import 'animate.css'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    const innerAudioContext = Taro.createInnerAudioContext()
    innerAudioContext.src = 'https://master-test-imgx.lygou.cc/cai/Beautiful%20In%20White.mp3'
    innerAudioContext.loop = true;
    innerAudioContext.play()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我们的婚礼'
  }

  render () {
    return (
      <View className='index'>
          {/* <Audio
            className='audio'
            src='https://master-test-imgx.lygou.cc/cai/Beautiful%20In%20White.mp3'
            controls
            loop={false}
            autoplay
            muted={false}
          /> */}
          {/* <Text className='girl'>李婕</Text>
          <Text className='boy'>谢建</Text> */}
          <Swiper
            className='swiper'
            indicatorDots={false}
            vertical
            circular
            autoplay={false}
          >
        <SwiperItem>
          <View className='home'>
            <View className='image-1-wrap'>
              <View className='image-1 animated fadeInDown'></View>
            </View>
            <View className='title-wrap'>
              <View className='title animated fadeInDown animated-delay-2'></View>
            </View>
            <View className='sign-wrap'>
              <View className='sign animated rollIn animated-delay-4'></View>
            </View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
      </View>
    )
  }
}
