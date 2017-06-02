
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import HeaderButton from '../HeaderButton'
class Component extends React.Component {
    static navigationOptions = ({navigation,screenProps})=>({
        title: screenProps.title || '加好友',
        headerRight: <HeaderButton text="发送" outStanding="true"/>,
        headerStyle:{
            backgroundColor:'grey',
        },
        headerTitleStyle:{
            color:'white'
        },
        headerBackTitleStyle:{
            color:'white'
        },
        headerTintColor:'white'
    })
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.name}>头像</Text>
                    <View style={styles.avatar}>
                        <TouchableWithoutFeedback  onPress={()=>{}}>
                        <Image source={{uri: 'http://p1.qzone.la/upload/3/bp6l0xdv.jpg'}}
                               style={styles.image} />
                        </TouchableWithoutFeedback>
                    </View>

                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>昵称</Text>
                    <Text style={styles.content}>小镇姑娘</Text>

                </View>
                <View style={[styles.item,styles.messageItem]}>
                    <Text style={styles.name}>请求信息</Text>
                    <Text style={styles.message}>我是awayisblue</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>备注</Text>
                    <Text style={styles.content}>未设置</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection:'column',
        justifyContent:'flex-start',
    },

    item:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        borderColor:'grey',
        borderBottomWidth:1.5,
        paddingTop:8,
        paddingBottom:8
    },
    name:{
        width:80,
        textAlign:'left',
        color:'grey',
        marginLeft:10
    },
    content:{
        flex:1,
        textAlign:'right',
        marginRight:10,
        color:'grey'
    },
    avatar:{
        flex:1,
        alignItems:'flex-end',
        marginRight:10,
    },
    image:{
        width: 45,
        height: 45
    },
    messageItem:{
        marginTop:20,
        borderTopWidth:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },

    message:{
        marginTop:5,
        paddingLeft:10,
        paddingRight:5,
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        demo: state.demo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { navigate } = ownProps.navigation;
    return {
        onIncrease: () => {
            navigate('Test')
            dispatch({type:'demo.increase'})
        },
        onDecrease: ()=>{
            dispatch({type:'demo.decrease'})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Component)