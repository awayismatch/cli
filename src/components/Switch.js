
import React  from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Button
} from 'react-native';

class Component extends React.Component {
    constructor(props){
        super(props)
        this.onPress = this.onPress.bind(this)
        this.state = {active:!!props.active}
    }
    onPress(){
        const {onChange} = this.props
        this.setState({active:!this.state.active})
        onChange&&onChange(this.state.active)
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress} >
                <View style={[styles.container,this.state.active?styles.active:null]}>
                    <View style={styles.round}/>
                </View>
            </TouchableWithoutFeedback>

        )

    }
}

const styles = StyleSheet.create({
    container:{
        width:35,
        borderRadius:8,
        height:16,
        backgroundColor:'grey',
        alignItems:'flex-start'
    },
    active:{
        backgroundColor:'green',
        alignItems:'flex-end'
    },
    round:{
        height:16,
        width:16,
        borderRadius:8,
        backgroundColor:'white',
        borderColor:'grey',
        borderWidth:1,
    }
});

export default Component