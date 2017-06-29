/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import PropsTest from './PropsTest';

export default class setup extends Component {
    render() {
        //延展操作符 ES6 新语法
        var params = {name: '小花', age: 18, sex: '女'}

        //结构赋值 ES6 新语法
        var {name, sex} = params
        return (
            <View style={styles.container}>
                <PropsTest
                    //传递属性 直接传递过去的是只读的
                    // name = "小虎"
                    // sex = '女'

                    //方法一
                    // name = {params.name}
                    // sex = {params.sex}
                    // age = {params.age}

                    ///方法二 延展操作符 ES6 新语法
                    //{...params}

                    //方法三 结构赋值
                    name = {name}
                    sex = {sex}
                />
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
