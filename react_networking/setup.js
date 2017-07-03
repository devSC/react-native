/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import MovieComponent from './MovieComponent'

export default class setup extends Component {
    //sample request- 1
    _fetch() {
        fetch('http://gc.ditu.aliyun.com/regeocoding?l=39.938133,116.395739&type=001')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                return responseJson;
            })
            .catch((error) => {
                console.error(error)
            })
    }

    _fetchWithParasm() {
        fetch('http://gc.ditu.aliyun.com/regeocoding', {
            method: 'GET',
            param: JSON.stringify({
                l: '39.938133,116.395739',
                type: '001',
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                return responseJson;
            })
            .catch((error) => {
                console.error(error)
            })
    }

    //send a async request
    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error)
            })
    }

    componentDidMount() {
        // this._fetch()
        // this._fetchWithParasm()
        this.getMoviesFromApiAsync()
    }

    render() {
        return (
            <View>
               <MovieComponent/>
            </View>
        );
    }
}
