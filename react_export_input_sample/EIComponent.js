/**
 * Created by devSC on 2017/6/29.
 */

import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

//导出变量和常量
var name = '小哈';
// var age = '20';
const age = '20';

//单个导出
// export var age = '20';

//批量导出
export { name, age };

///导出组件
export default class  EIComponent extends Component {
    render() {
        return <Text
            style={{fontSize: 30, backgroundColor: 'blue'}}
        >Hellow</Text>
    }
}

///导出方法
export function sum(a, b) {
    return a + b
}