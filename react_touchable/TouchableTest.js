/**
 * Created by devSC on 2017/6/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    //导入touable 库
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
/**
 TouchableWithoutFeedback：响应用户的点击事件，如果你想在处理点击事件的同时不显示任何视觉反馈，使用它是个不错的选择。
 TouchableHighlight：在TouchableWithoutFeedback的基础上添加了当按下时背景会变暗的效果。
 TouchableOpacity：相比TouchableHighlight在按下去会使背景变暗的效果，TouchableOpacity会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。
 TouchableNativeFeedback：在Android上还可以使用TouchableNativeFeedback，它会在用户手指按下时形成类似水波纹的视觉效果。注意，此组件只支持Android。
 心得：以上四个组件，其中TouchableHighlight、TouchableOpacity以及TouchableNativeFeedback都是在TouchableWithoutFeedback的基础上做了一些扩展，我们从它们的源码中可以看出：
 * */
export default class TouchableTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            text: '',
            waiting: false,
        }
    }

    render() {
        return <View>
            <TouchableWithoutFeedback
                //单击
                onPress={()=> {
                    this.setState({count: this.state.count+1})
                }}
                //长按
                onLongPress={()=>{
                    Alert.alert('提示','是否确认删除?', [
                        {text: '取消', onPress: ()=>{}, style: 'cancel'},
                        {text: '确定', onPress: ()=>{}},
                    ])
                }}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        我是TouchableWithoutFeedback,单击我
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.text}>您单击了:{this.state.count}次</Text>
            <TouchableWithoutFeedback
                ///disable 属性
                disabled={this.state.waiting}
                onPress={()=> {
                    this.setState({
                        text:'正在登录...',
                        waiting:true
                    })

                    //定时器
                    setTimeout(()=>{
                        this.setState({
                            text:'网络不流畅',
                            waiting:false
                        })
                    },2000);

                }}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        登录
                    </Text>
                </View>
            </TouchableWithoutFeedback>

            {/*onPressIn function与onPressOut function*/}
            {/*这两个方法分别是当用户开始点击按钮时与点击结束后被回调。*/}
            <TouchableWithoutFeedback
                onPressIn={()=> {
                    this.setState({
                        text:'触摸开始',
                        startTime:new Date().getTime()
                    })
                }}
                onPressOut={()=>{
                    this.setState({
                        text:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'
                    })
                }}
                // 另外我们也可以通过delayPressIn与delayPressOut两个方法来分别设置，从用户点击按钮到onPressIn 被回调的延时与从点击结束到onPressOut 被回调时的延时。
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        点我
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight
                style= {styles.button}
                activeOpacity={0.7}
                underlayColor='green'
                onHideUnderlay={()=>{
                    this.setState({text:'衬底被隐藏'})
                }}
                onShowUnderlay={()=>{
                    this.setState({text:'衬底显示'})
                }}
                onPress={()=>{

                }}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        TouchableHighlight
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity
                style= {styles.button}
                activeOpacity={0.2}
                underlayColor='green'
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        TouchableOpacity
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>{this.state.text}</Text>

            {/*only support android*/}

            {/*<TouchableNativeFeedback*/}
                {/*onPress={()=>{*/}
                    {/*this.setState({count: this.state.count + 1})*/}
                {/*}}*/}
                {/*background={TouchableNativeFeedback.SelectableBackground()}>*/}
                {/*<View style=>*/}
                    {/*<Text style=>TouchableNativeFeedback</Text>*/}
                {/*</View>*/}
            {/*</TouchableNativeFeedback>*/}
            {/*<Text style={styles.text}>{this.state.text}</Text>*/}
        </View>
    }
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
    },
    text: {
        fontSize: 15,
    }
})