/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    ActivityIndicator,
} from 'react-native';

export default class MovieComponent extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            isLoading: true
        })
    }

    //send a async request
    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.movies);
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    requestMoviesByXMLRequest() {
        var request = new XMLHttpRequest()
        request.open('GET', 'https://facebook.github.io/react-native/movies.json');
        // request.onload = () => {
        //     if (request.readyState !== 4) {
        //         return;
        //     }
        //     if (request.status === 200) {
        //         console.log('success', request.response);
        //
        //         var movies = JSON.parse(request.responseText).movies
        //         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
        //         this.setState({
        //             isLoading: false,
        //             dataSource: ds.cloneWithRows(movies),
        //         });
        //     }
        //     else {
        //         this.setState({ isLoading: false })
        //         console.warn('error');
        //     }
        // };
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                console.log('success', request.response);

                var movies = JSON.parse(request.responseText).movies
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(movies),
                });
            }
            else {
                this.setState({ isLoading: false })
                console.warn('error');
            }
        };

        request.send();
    }

    componentDidMount() {
        // this.getMoviesFromApiAsync()
        this.requestMoviesByXMLRequest()
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View
                    style = {{
                        marginTop: 64,
                    }}
                ><ActivityIndicator/></View>
            );
        }
        else {
            return (
                <View
                    style = {{
                        marginTop: 64,
                        marginBottom: 10,
                        marginLeft: 10,
                        marginRight: 10,
                    }}
                >
                    <ListView
                        dataSource = { this.state.dataSource }
                        renderRow = {(rowData) =>
                            <Text
                                style={{fontSize: 20}}
                            >{rowData.title}, {rowData.releaseYear}</Text>
                        }
                    />
                </View>
            );
        }
    }
}
