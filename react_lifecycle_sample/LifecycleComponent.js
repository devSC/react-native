/**
 * Created by devSC on 2017/6/29.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class LifecycleComponent extends Component {
    //life cycle http://www.devio.org/2016/08/10/React-Native%E4%B9%8BReact%E9%80%9F%E5%AD%A6%E6%95%99%E7%A8%8B-(%E4%B8%AD)/
    ///初始化
    constructor(props){
        super(props)
        console.log('------constructor------')
        this.state={
            ///初始并定义一个属性
            count: 0,
        }
    }

    componentWillMount(){
        console.log('------componentWillMount------')
    }

    componentDidMount(){
        console.log('------componentDidMount------')

    }

    componentWillReceiveProps(nextProps) {
        console.log('------componentWillReceiveProps------')

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('------shouldComponentUpdate------')

        return true
    }

    componentWillUpdate() {
        console.log('------componentWillUpdate------')

    }

    componentDidUpdate() {
        console.log('------componentDidUpdate------')

    }

    componentWillUnmount() {
        console.log('------componentWillUnmount------')

    }

    render(){
        console.log('------render------')
        return <View>
            <Text
                style={{fontSize: 20, backgroundColor: 'red'}}
                onPress={()=>{
                    this.setState({
                        //模拟state变化 从而来调试生命周期方法
                        count: this.state.count + 1,
                    })
                }}
            >点我</Text>
            <Text>被点击了{this.state.count}次</Text>
        </View>
    }
}