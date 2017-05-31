
import React  from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
} from 'react-native';

class Component extends React.Component {

    render() {
        let {text,onPress,outStanding} = this.props
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                <Text style={[styles.text,outStanding?styles.outStanding:null]}>{text}</Text>
            </TouchableOpacity>

        )

    }
}

const styles = StyleSheet.create({
    text: {
        color:'white',
        fontSize:14,
        marginRight:5,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:3,
    },
    outStanding:{
        backgroundColor:'green'
    }
});

export default Component