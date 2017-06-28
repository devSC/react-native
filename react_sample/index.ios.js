/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import setup from './setup'

/**
 * 将设置代码统一放入 setup.js文件夹中，这样ios.js 和 android.js直接导入设置即可运行相同代码
 * 并且所有的修改都能有效运行
 * */
AppRegistry.registerComponent('react_sample', () => setup);
