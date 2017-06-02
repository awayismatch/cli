
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';



import HeaderButton from '../../HeaderButton'
import Item from './Item'

class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '好友申请',
        headerRight: <HeaderButton text="添加好友" />,
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
           <Item result="已授受"/>
           <Item result="已拒绝"/>
           <Item />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:10,
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection:'column',
        justifyContent:'flex-start',
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