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

export default class FlexBoxDice extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {{
                    margin: 5,
                    width: 64,
                    height: 64,
                    backgroundColor: '#222222',
                    borderRadius: 5,
                    padding: 5,
                    flexDirection:'row',
                    justifyContent: 'center'}}
                >
                    <View style = {styles.first}/>
                </View>
                <View style = {styles.dice}>
                    <View style = {styles.second}/>
                </View>
                <View style = {styles.dice}>
                    <View style = {styles.third}/>
                </View>
                <View style = {styles.forthDice}>
                    <View style = {styles.forth}/>
                </View>
                <View style = {styles.fifthDice}>
                    <View style = {styles.fifth}/>
                </View>
                <View style = {styles.sixDice}>
                    <View style = {styles.sixth}/>
                </View>
                <View style = {styles.dice}>
                    <View style = {styles.second}/>
                </View>
                <View style = {styles.dice}>
                    <View style = {styles.second}/>
                </View>
                <View style = {styles.dice}>
                    <View style = {styles.second}/>
                </View>
            </View>
        );
    }
}

/**
 * justifyContent 是沿着主轴来布局,
 * 当flexDirection为'column':
 * justifyContent 则为垂直方向, 则alignItems
 * 当flexDirection为'row':
 * justifyContent 则为水平方向,
 *
 * flexDirection默认为'column'
 * */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444444',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 20,
    },
    dice: {
        margin: 5,
        width: 64,
        height: 64,
        backgroundColor: '#222222',
        borderRadius: 5,
        padding: 5,
        flexDirection:'row',
        justifyContent: 'center',

    },
    first: {
        width: 14,
        height: 14,
        backgroundColor: '#555555',
        borderRadius: 7,
        margin: 4,
        position: 'absolute',
    },
    second: {
        width: 14,
        height: 14,
        backgroundColor: '#555555',
        borderRadius: 7,
        alignSelf: 'center',
    },
    third: {
        width: 14,
        height: 14,
        backgroundColor: '#555555',
        borderRadius: 7,
        alignSelf: 'flex-end',
    },
    forthDice: {
        margin: 5,
        width: 64,
        height: 64,
        backgroundColor: '#f4f413',
        borderRadius: 5,
        padding: 5,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    forth: {
        width: 14,
        height: 14,
        backgroundColor: '#555555',
        borderRadius: 7,
    },
    fifthDice: {
        margin: 5,
        width: 64,
        height: 64,
        backgroundColor: '#f4f413',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fifth: {
        width: 14,
        height: 14,
        backgroundColor: '#555555',
        borderRadius: 7,
    },
    sixDice: {
        margin: 5,
        width: 64,
        height: 64,
        backgroundColor: '#f4f413',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    sixth: {
        width: 14,
        height: 14,
        backgroundColor: '#555555',
        borderRadius: 7,
    },
    seventh: {
        width: 14,
        height: 14,
        backgroundColor: '#555555',
        borderRadius: 7,
        alignSelf: 'center',
    },
    eighth: {
        width: 14,
        height: 14,
        backgroundColor: '#555555',
        borderRadius: 7,
        alignSelf: 'center',
    },


});