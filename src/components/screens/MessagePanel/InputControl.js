
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TextInput
} from 'react-native';

class Component extends React.Component {
    constructor(props){
        super(props)
        this.state = { text: 'Useless Placeholder' };
    }
    render(){
        const {onPress,self} = this.props
        return  <View style={styles.container}>
            <TextInput
                underlineColorAndroid="transparent"
                style={styles.textInput}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            <TouchableWithoutFeedback>
                <View style={styles.sendButton}>
                    <Text >发送</Text>
                </View>
            </TouchableWithoutFeedback>


            </View>

    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex:1,
    },
    sendButton:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft:5,
        paddingRight:5,
        justifyContent:'center',
        alignItems:'center'
    },
});

export default Component