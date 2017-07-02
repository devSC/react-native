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
    ListView,
} from 'react-native';

export default class ListComponent extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = ({
          dataSource: ds.cloneWithRows(this._genRows())
        });

    }

    _genRows(): Array<String> {
        var dataBlob = [];
        for (var ii = 0; ii < 100; ii++) {
            dataBlob.push('Row ' + ii);
        }
        return dataBlob;
    }

    render() {
        return (
            <View style = {{marginTop: 64}}>
                <ListView
                    dataSource = { this.state.dataSource }
                    renderRow = {
                        (rowData) =>
                            <Text
                                style={{
                                    fontSize: 20,
                                    height: 50,
                                }}
                            >{rowData}</Text>
                    }
                />
            </View>
        );
    }
}