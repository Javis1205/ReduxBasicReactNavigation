import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Action from "../actions/actions.js";
import {NavigationActions} from 'react-navigation';
class ManHinh1 extends Component {
    static navigationOptions = {
        header: null
    } 
    render(){
        console.log('PROP',this.props);
        return(
            <View style={{ justifyContent:'center',alignItems:'center',flex:1 }}>
                <Text>
                    MANHINH1
                </Text>
                <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('MAN2')
                    }}>
                    <Text>
                        CHUYEN
                    </Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>{
                        this.props.navigation.setParams({
                            username:'hello'
                        })
                    }}>
                    <Text>
                        SETPARAMS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        const resetNavigator = NavigationActions.reset({
                                index: 0,
                                actions : [
                                    NavigationActions.navigate({
                                        routeName: 'MAN2'
                                    })
                                ],
                        });
                        this.props.navigation.dispatch(resetNavigator);
                    }}>
                    <Text>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        STATE : state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Action,dispatch);
}
export default connect (mapStateToProps,mapDispatchToProps)(ManHinh1);