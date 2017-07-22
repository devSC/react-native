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
import FlexBoxTest from './FlexBoxTest'
import FlexBoxDice from './FlexBoxDice'

export default class setup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlexBoxDice/>
                {/*<FlexBoxTest/>*/}
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
});