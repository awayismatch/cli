
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
        const {onPress,self} = this.props
        return  <View style={[styles.item,self?styles.selfItem:null]}>
                <Image source={{uri: 'http://p1.qzone.la/upload/3/bp6l0xdv.jpg'}}
                       style={styles.avatar} />
                <View style={[styles.contentWrapper,self?styles.selfWrapper:null]}>
                    <Text style={styles.name}>小镇姑娘</Text>
                    <Text style={[styles.content,self?styles.selfContent:null]}>这个是消息内容这个是消息内容这个是消息内容这个是消息内容这个是消息内容这个是消息内容</Text>
                </View>
            </View>

    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingTop:10,
        paddingBottom:12,
        marginLeft:8,
    },
    selfItem:{
        flexDirection:'row-reverse',
        marginRight:8,
    },
    contentWrapper:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginLeft:13
    },
    selfWrapper:{
        alignItems:'flex-end',
        marginRight:13,
        marginLeft:0,
    },
    avatar:{
        width: 45,
        height: 45,

    },
    name:{
        flex:1,
        textAlign:'left',
        color:'grey',
    },
    content:{
        marginTop:5,
        maxWidth:180,
        borderColor:'grey',
        borderWidth:1,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'pink'
    },
    selfContent:{
        backgroundColor:'aqua'
    }

});

export default Component