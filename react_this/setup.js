/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

//this 指向

//1.如果一个函数中有this，但是它没有以对象方法的形式调用，而是以函数名的形式执行，那么this指向的就是全局对象。
/*
 test() {
 console.log(this)
 }
 * */

//2.如果一个函数中有this，并且这个函数是以对象方法的形式调用，那么this指向的就是调用该方法的对象。
var obj = {
    test() {
        console.log(this)
    }
}
obj.test() //obj

//3.如果一个函数中有this，并且包含该函数的对象也同时被另一个对象所包含，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象。
var obj = {
    test: {
        fun() {
            console.log(this)
        }
    }
}

obj.test.fun() //test

//4.如果一个构造函数或类方法中有this，那么它指向由该构造函数或类创建出来的实例对象。
class Test {
    constructor() {
        this.test = 'test'; //this = 类示例

        //4.1 强制绑定为当前类
        this.option = this.option.bind(this)
    }

    option() {
        console.log(this) //this指向调用该函数的 类 的this
    }

    //剪头函数
    arrowOption = () => {
        console.log(this) //Test
    }
}

export default class setup extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Bind this
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
