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

///, { name, age } 为导出此类的变量 sum为+方法
import EIComponent, { name, age, sum } from './EIComponent'

export default class setup extends Component {
    constructor(props) {
        super(props);
        //定义变量
        this.state = ({
            result: ''
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>名字: { name }</Text>
                <Text style={{fontSize: 20}}>年龄: { age }</Text>
                <Text
                    style={{fontSize: 20}}
                    onPress={()=>{
                        var result = sum(2, 3)
                        this.setState({
                            result: result
                        })
                    }}
                    ///使用变量
                >2 + 3 = { this.state.result }</Text>
                {/*<EIComponent/>*/}
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

