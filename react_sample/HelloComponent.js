/**
 * Created by devSC on 2017/6/28.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

/*
 * ES6 定义一个组件 <-推荐
 * export default 为导出组件命令
 */
export default class HelloComponent extends Component {
    /**
     * render 方法为React中组件必须实现的方法，
     */
    render(){
        ///this.props.name 访问name属性
        return <Text style={{fontsize:20,backgroundColor:'red'}}>Hello.{this.props.name}</Text>
    }
};

/**
 * ES5 定义组件
 * */
///定义变量
// var HelloComponent=React.createClass({
//     render(){
//         return <Text style={{fontsize:20,backgroundColor:'red'}}>Hello</Text>
//     }
// })

// ///通过 module.exports 命令导出 HelloComponent 组件
// module.exports=HelloComponent;


/**
 * 通过函数式定义组件
 *
 * 通过函数定义的是无状态的
 * 不能使用this指针也就是不能访问属性
 * 同时也没有完整的生命周期方法，（本身就是方法）
 * */

///定义函数
// function HelloComponent(props) {
//     return <Text style={{fontsize:20,backgroundColor:'red'}}>Hello.{props.name}</Text>
// }

///导出为组件
// module.exports=HelloComponent;