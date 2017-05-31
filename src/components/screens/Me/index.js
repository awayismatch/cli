
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import InfoEdit from '../__global/InfoEdit';

class Component extends React.Component {
    static navigationOptions = {
        title: '我',
        headerRight: <Button title='设置'/>
    };
    constructor(props){
        super(props)
        this.navigateTo = this.navigateTo.bind(this)

    }
    navigateTo(name,field){
        const {navigate} = this.props.navigation
        navigate(name,{field})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.name}>头像</Text>
                    <View style={styles.avatar}>
                        <Image source={{uri: 'http://p1.qzone.la/upload/3/bp6l0xdv.jpg'}}
                               style={styles.image} />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>昵称</Text>
                    <Text style={styles.content} onPress={()=>{
                        this.navigateTo('InfoEdit','昵称')
                    }}>awayisblue</Text>

                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>个性签名</Text>
                    <Text style={styles.content} onPress={()=>{
                        this.navigateTo('InfoEdit','个性签名')
                    }}>Ta什么也没说</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>生日</Text>
                    <Text style={styles.content} onPress={()=>{
                        this.navigateTo('InfoEdit','生日')
                    }}>1993-08-08</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>性别</Text>
                    <Text style={styles.content} onPress={()=>{
                        this.navigateTo('InfoEdit','性别')
                    }}>男</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>地区</Text>
                    <Text style={styles.content} onPress={()=>{
                        this.navigateTo('InfoEdit','地区')
                    }}>广东广州</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>邮箱</Text>
                    <Text style={styles.content} onPress={()=>{
                        this.navigateTo('InfoEdit','邮箱')
                    }}>awayisblue@qq.com</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>手机</Text>
                    <Text style={styles.content}>13610246527</Text>
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