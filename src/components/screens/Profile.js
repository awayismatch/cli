
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


class Component extends React.Component {
    static navigationOptions = ({navigation,screenProps})=>({
        title: screenProps.title || '资料详情',
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
        this.navigateTo = this.navigateTo.bind(this)
    }
    navigateTo(name){
        const {navigate} = this.props.navigation
        navigate(name)
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
                    <Text style={styles.content}>awayisblue</Text>

                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>个性签名</Text>
                    <Text style={styles.content}>Ta什么也没说</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>生日</Text>
                    <Text style={styles.content}>1993-08-08</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>性别</Text>
                    <Text style={styles.content}>男</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>地区</Text>
                    <Text style={styles.content}>广东广州</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableWithoutFeedback onPress={()=>{this.navigateTo('AddFriend')}}>
                        <View style={styles.addButton}>
                            <Text style={styles.addText}>加为好友</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.buttonGroup}>
                        <TouchableWithoutFeedback>
                            <View style={styles.commonButton}>
                                <Text style={styles.commonText}>加入黑名单</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={styles.commonButton}>
                                <Text style={styles.commonText}>举报</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
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
    buttonWrapper:{
        alignItems:'stretch',

    },
    addButton:{
        marginLeft:10,
        marginRight:10,
        backgroundColor:'green',
        marginTop:25,

    },
    addText:{
        textAlign:'center',
        fontSize:20,
        paddingTop:5,
        paddingBottom:5,
        color:'white'
    },
    buttonGroup:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    commonButton:{
        width:165,
        borderColor:'grey',
        borderWidth:1
    },
    commonText:{
        textAlign:'center',
        fontSize:20,
        paddingTop:5,
        paddingBottom:5,
        color:'grey'
    }
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