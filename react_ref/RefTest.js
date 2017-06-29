/**
 * Created by Wilson on 2017/6/29.
 */


import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class RefTest extends Component {
    state = {
        size: 80
    }
    getSize() {
        return this.state.size
    }
    render() {
        return <View>
            <Text
                style={{fontSize: 20}}
                onPress={()=>{
                    this.setState({
                        size: this.state.size + 10
                    })
                }}
            >我吹</Text>
            <Image
                style={{width: this.state.size, height: this.state.size}}
                source={require('./iconAddressUnselect.png')}
            />
        </View>
    }
}