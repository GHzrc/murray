/**
 * Created by bear on 2017/6/28.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    View,
    ScrollView, DeviceEventEmitter,
} from 'react-native';
import {indexStyles} from '../styleSheet/index'
import MyCarousel from '../../../components/Carousel/index'
import * as application from '../../../actions/application'
import {Grid} from 'antd-mobile';

@connect(
    state => {
        return {...state.application}
    },
    dispatch => bindActionCreators({...application}, dispatch)
)
export default class Application extends Component {
    constructor(props) {
        super(props);
        this.diplayName = "Application"
    }

    componentDidMount() {
        // DeviceEventEmitter.emit('left', '发送了个通知');
        this.props.getGridList()
        // this.deEmitter = DeviceEventEmitter.addListener('left', (a) => {
        //     alert('收到通知：' + a);
        // });
    }

    _gridClick = (item) => {
        const {navigation} = this.props
        navigation.navigate(item.path,{url:item.url})
    }
    render() {
        return (
            <ScrollView style={indexStyles.container}>
                <View style={indexStyles.cansInfo}>
                    <MyCarousel/>
                </View>
                <View>
                    <Grid data={this.props.gridList}
                          hasLine={false}
                          columnNum={5}
                          onClick={this._gridClick}
                    />
                </View>
            </ScrollView>
        );
    }
}


