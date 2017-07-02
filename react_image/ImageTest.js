/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

/**
 image 必须指定图片大小, 否则不能渲染
 style={{width: 200, height: 100}}
 * */
export default class ImageTest extends Component {
    onTest() {
        var a = 2, b = 3;
        return a + b;
    }
    render() {
        return <View>
            {/*使用本地图*/}
            <Image
                //cover', 'contain', 'stretch', 'center'
                resizeMode={'contain'}
                style={{width: 200, height: 100}}
                //请求本地
                source={require('./IMG_0850.png')}
                //请求网络图
            />
            <Image
                //cover', 'contain', 'stretch', 'center'
                style={{width: 16, height: 16}}
                //使用原生时, 可以指定使用1倍图, 系统会根据屏幕尺寸自动适配 @2x, @3x图
                source={require('./source/ic_feed_like_16_s.png')}
            />
            {/*请求网络图*/}
            <Image
                //cover', 'contain', 'stretch', 'center'
                style={{width: 200, height: 100}}
                source={{url: 'http://d.hiphotos.baidu.com/zhidao/pic/item/279759ee3d6d55fb2166d92165224f4a20a4dd11.jpg'}}
            />
            {/*使用iOS项目中原生的图 安卓中只能使用draw able中图的资源*/}
            <Image
                //cover', 'contain', 'stretch', 'center'
                style={{width: 120, height: 20}}
                //直接使用原生图名
                source={{url: 'new'}}
            />
            <Text
                style={{fontSize: 20}}
                onPress={()=>{
                    this.onTest();
                }}
            >点击</Text>
        </View>
    }
}
