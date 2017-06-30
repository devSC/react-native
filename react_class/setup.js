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
import Student from './Student'
import MiStudent from './MiStudent'

export default class setup extends Component {
    constructor(props) {
        super(props)

        //初始化类
        this.stu = new Student('小红', '女', 18);
        this.miStu = new MiStudent()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{fontSize: 20}}
                >{this.stu.getDescription()}</Text>
                <Text
                    style={{fontSize: 20}}
                >{this.miStu.getDescription()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64
    },
});
