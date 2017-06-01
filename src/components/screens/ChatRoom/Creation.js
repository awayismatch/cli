
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import Picker from 'react-native-picker';

import HeaderButton from '../__global/HeaderButton'
import pickerData from '../../../utils/pickerData';
class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '创建聊天室',
        headerRight: <HeaderButton text="确定" outStanding='true'/>,
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

    navigateTo(name,field){
        const {navigate} = this.props.navigation
        navigate(name,{field})
    }
    render() {

        return <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.name}>话题</Text>
                <Text style={styles.content} onPress={()=>{
                        this.navigateTo('InfoEdit','话题')
                    }}>Ta什么也没说</Text>

            </View>
            <View style={[styles.item,styles.descItem]}>
                <Text style={styles.name}>描述</Text>
                <Text style={styles.desc}>当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行当有描述时显示此行</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.name}>成员性别</Text>
                <Text style={styles.content} onPress={()=>{
                        console.log('成员press')
                        Picker.init({
                             pickerData:pickerData.chatRoomGenderData,
                             selectedValue:['不限']
                        })
                        Picker.show()
                    }}>按比例</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.name}>人数</Text>
                <Text style={styles.content} onPress={()=>{
                        Picker.init({
                             pickerData:pickerData.genPeopleAmountData(true,'男'),
                             pickerTitleText:'总人数-男-女',
                             selectedValue:['不限']
                        })
                        Picker.show()
                    }}>50</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.name}>开放性</Text>
                <Text style={styles.content} onPress={()=>{
                        Picker.init({
                             pickerData:pickerData.chatRoomOpenData,
                        })
                        Picker.show()
                    }}>公开</Text>
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
        alignItems:'stretch',
        paddingLeft:10,
        paddingRight:5,
    },
    content:{
        flex:1,
        textAlign:'right',
        marginRight:5,
        color:'grey'
    },
    avatar:{
        flex:1,
        alignItems:'flex-end',
        marginRight:5,
    },
    image:{
        width: 45,
        height: 45
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