
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TextInput,
} from 'react-native';

import HeaderButton from '../../HeaderButton'
import Item from './Item'

class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '添加好友',
        headerRight: <HeaderButton text="搜索" outStanding='true'/>,
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
            <TextInput
            style={styles.input}
            placeholder="请输入手机号"
            onChangeText={(text) => this.setState({text})}/>
            <Item onPress={()=>{this.navigateTo('AddFriend')}}/>
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

    input:{
        textAlign:'center'
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