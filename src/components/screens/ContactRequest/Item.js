
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

class Component extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {result} = this.props
        let operation
        if(result){
            operation = <View style={styles.operation}>
                              <Text style={styles.resultText}>{result}</Text>
                        </View>
        }else{
            operation = <View style={styles.operation}>
                <TouchableWithoutFeedback>
                    <View style={[styles.button,styles.refuse]}>
                        <Text style={styles.buttonText}>拒绝</Text>
                    </View>

                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.button,styles.accept]}>
                        <Text style={styles.buttonText}>接受</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        }
        return <View style={styles.item}>
            <Image source={{uri: 'http://p1.qzone.la/upload/3/bp6l0xdv.jpg'}}
                   style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>小镇姑娘</Text>
                <Text style={styles.content} numberOfLines={1}>你好，我是小镇姑娘,你好，我是小镇姑娘,你好，我是小镇姑娘</Text>
            </View>
            {operation}
        </View>
    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderColor:'grey',
        borderBottomWidth:1.5,
        borderTopWidth:1.5,
        paddingTop:8,
        paddingBottom:8,
        marginTop:5,

    },
    image:{
        width: 45,
        height: 45,
        marginLeft:5,
    },
    info:{
        marginLeft:10,
        width:200,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    operation:{
        paddingLeft:5,
        paddingRight:5,
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    button:{
        paddingLeft:5,
        paddingRight:5,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:4,
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    refuse:{
        backgroundColor:'red',
    },
    accept:{
        backgroundColor:'green',
        marginLeft:5,
    },
    name:{
        width:80,
        textAlign:'left',
        color:'grey',

    },
    content:{
        textAlign:'right',
        marginRight:5,
        color:'grey'
    },
    result:{

    },
    resultText:{
        color:'grey'
    },
});

export default Component