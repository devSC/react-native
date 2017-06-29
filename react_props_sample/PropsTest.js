/**
 * Created by devSC on 2017/6/29.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class PropsTest extends Component {

    //定义默认属性
    static defaultProps = {
        name: "小红",
        age: 16,
    }

    //定义属性类型
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,

        //isRequired 标示 必须传递参数
        sex: PropTypes.string.isRequired,
    }

    render() {
        return <View>
            <Text style={{fontSize: 20, backgroundColor: 'yellow'}}>姓名: {this.props.name}</Text>
            <Text style={{fontSize: 20, backgroundColor: 'yellow'}}>年龄: {this.props.age}</Text>
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>性别: {this.props.sex}</Text>
        </View>
    }
}