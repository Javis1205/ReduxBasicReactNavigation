import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
export default class ManHinh1 extends Component {
    render(){
        console.log('PROPSCUAMAN2',this.props)
        return(
            <View style={{ justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>
                    MANHINH2
                </Text>
                <TouchableOpacity onPress={()=>{
                        this.props.navigation.goBack()
                    }}>
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}