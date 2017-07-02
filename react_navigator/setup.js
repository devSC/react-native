/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

import React, { Component, PropTypes } from 'react';
import {
    Button,
    NavigatorIOS,
    Text,
    View,
} from 'react-native';

export default class setup extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MyScene,
                     // The title displayed in the navigation bar and the back button for this
                     // route.
                    title: 'My initial scene',
                    passProps: {
                        //this title is define from the MyScene propTypes
                        title: 'MyScene',
                    }
                }}
                style={{flex: 1}}
            />
        );
    }
}

class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute);
    }

    render() {
        const nextRoute = {
            component: MyScene2,
            title: 'My Scene 2',
            passProps: {
                myProp: ' bar',
                title: 'MyScene2'
            },
        };
        return <View>
            <Text
                style={{marginTop: 64}}
            >Current Scene: { this.props.title }</Text>
            <Button title="Tap me to load the next scene"
                    onPress={()=>{
                        this._handleNextPress(nextRoute)
                    }}
            />
        </View>
    }
}

class MyScene2 extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    _handleBackPress() {
        this.props.navigator.pop()
    }

    render() {
        return <View>
            <Text
                style={{marginTop: 64}}
            >Current Scene: { this.props.title + this.props.myProp }</Text>
            <Button
                title="back"
                onPress={() => {
                    this._handleBackPress()
                }}
            />
        </View>
    }
}