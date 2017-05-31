
import React  from 'react';

import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput
} from 'react-native';
import Picker from 'react-native-picker';

class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '完善个人信息',
        headerRight: <Button title='确定'/>
    })
    constructor(props){
        super(props)
    }
    render(){
        let {field} = this.props.navigation.state.params
        let isSelection = false
        switch (field){
            case '生日':
            case '性别':
            case '地区':
                isSelection = true
                break
            default:

        }
        let content = isSelection?<View style={styles.item}>
                <Text style={styles.name}>{field}</Text>
                <Text style={styles.content}>awayisblue</Text>
            </View>:<View style={styles.inputItem}>

                <TextInput
                    style={styles.input}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
            </View>
        return <View style={styles.container}>
                    <Text style={styles.desc}>请设置{field}</Text>
                    {content}
                </View>

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'stretch',
        marginTop:10
    },
    item:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        borderColor:'grey',
        borderBottomWidth:1.5,
        borderTopWidth:1.5,
        paddingTop:8,
        paddingBottom:8,
        marginTop:5
    },
    inputItem:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingTop:8,
        paddingBottom:8,
        marginTop:5
    },
    desc:{
        backgroundColor:'#cccccc',
        color:'grey',
        textAlign:'left',
        paddingLeft:5
    },
    name:{
        textAlign:'left',
        color:'grey',
        marginLeft:10
    },
    content:{
        flex:1,
        textAlign:'right',
        marginRight:5,
        color:'grey'
    },
    input:{
        flex:1,
        textAlign:'center',
        marginRight:5,
        color:'grey'
    },


});

export default Component