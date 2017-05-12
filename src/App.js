import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { CHA } from './navigations/ChaCua2ManHinh';
import store from './store';
import { Provider } from 'react-redux';
export default class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <CHA />
            </Provider>
        )
    }
}