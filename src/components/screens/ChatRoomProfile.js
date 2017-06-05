
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

        return <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.name}>话题</Text>
                <Text style={styles.content}>Ta什么也没说</Text>

            </View>
            <View style={[styles.item,styles.descItem]}>
                <Text style={styles.name}>描述</Text>
                <Text style={styles.desc}>当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.name}>成员性别</Text>
                <Text style={styles.content}>按比例</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.name}>人数情况</Text>
                <Text style={styles.content}>男:20/30, 女:10/20</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableWithoutFeedback>
                    <View style={styles.leaveButton}>
                        <Text style={styles.buttonText}>删除并退出</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>

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
        justifyContent:'flex-start',
        alignItems:'center',
        borderColor:'grey',
        borderBottomWidth:1.5,
        paddingTop:8,
        paddingBottom:8
    },
    descItem:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    name:{
        width:80,
        textAlign:'left',
        color:'grey',
        marginLeft:10
    },
    desc:{
        paddingLeft:10,
        paddingRight:10,
    },
    content:{
        flex:1,
        textAlign:'right',
        marginRight:10,
        color:'grey'
    },
    buttonWrapper:{
        alignItems:'stretch'
    },
    leaveButton:{
        marginLeft:10,
        marginRight:10,
        backgroundColor:'pink',
        marginTop:25

    },
    buttonText:{
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