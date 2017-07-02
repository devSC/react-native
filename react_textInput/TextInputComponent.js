/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    TextInput,
} from 'react-native';

export default class TextInputComponent extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            text: 'Useless Placeholder'
        })
    }
    render() {
        return (
            <TextInput
                style={{
                    marginLeft: 20,
                    marginRight: 20,
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                onChangeText={(text) => {
                    this.setState({
                        text: text
                    })
                }}
                // maxLength={10}
                placeholder={' ' + this.state.text}
                enablesReturnKeyAutomatically={true}
                numberOfLines={4}
            />
        );
    }
}
