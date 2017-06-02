
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

import Picker from 'react-native-picker';

import HeaderButton from '../HeaderButton'
import pickerData from '../../utils/pickerData';
class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '聊天室详情',
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
                    <View style={styles.enterButton}>
                        <Text style={styles.enterText}>加入</Text>
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
        paddingRight:5,
    },
    content:{
        flex:1,
        textAlign:'right',
        marginRight:5,
        color:'grey'
    },
    buttonWrapper:{
        alignItems:'center'
    },
    enterButton:{
        width:330,
        backgroundColor:'green',
        marginTop:25

    },
    enterText:{
        textAlign:'center',
        fontSize:20,
        paddingTop:5,
        paddingBottom:5,
        color:'white'
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