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

import RefTest from './RefTest'

export default class setup extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            size: 0
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{fontSize: 20}}
                    onPress={()=>{

                        //方式一获取
                        // var size = this.refs.reftest.getSize();

                        //通过refs可以访问到组建中的所有定义过ref的组建
                        var size = this.refs['reftest'].getSize();

                        //方式二获取
                        // var size = this.reftest.getSize();
                        this.setState({
                            size: size,
                        })
                    }}
                >获取气球大小: {this.state.size}</Text>
                <RefTest
                    //定义ref 方式一
                    ref="reftest"
                    //方法二
                    // ref = {reftest => this.reftest = reftest}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
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