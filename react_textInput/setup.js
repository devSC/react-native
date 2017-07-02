/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import TextInputComponent from "./TextInputComponent";

export default class setup extends Component {
    render() {
        return (
            <View style={styles.container}>
              <TextInputComponent/>
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

AppRegistry.registerComponent('react_textInput', () => react_textInput);
