/**
 * Created by Wilson on 2017/6/29.
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

 export default class StateTest extends Component {
    //初始化可变属性 方法二
    state = {
        size: 80,
    }

     ///state 是可变的 props是不可变的.
    constructor(props) {
        super(props);

        //初始化 state方法一
        // this.state = ({
        //     size: 80,
        // })
    }

    ///目前测试.jpg文件加载会报错
    render() {
        return <View>
            <Text
                style={{fontSize: 20}}
                onPress={()=>{
                    this.setState({
                        size: this.state.size + 10
                    })
                }}
            >我吹</Text>
            <Text
                style={{fontSize: 20}}
                onPress={()=>{
                    this.setState({
                        size: this.state.size - 20
                    })
                }}
            >变小</Text>
            <Image
                source={require('./iconAddressUnselect.png')}
                style={{width: this.state.size, height: this.state.size}}
            />
        </View>
    }
}