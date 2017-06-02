
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableWithoutFeedback
} from 'react-native';



import HeaderButton from '../../HeaderButton'
import Item from './Item'

class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '好友申请',
        headerRight: <HeaderButton text="添加好友" onPress={()=>{
            navigation.navigate('SearchUser')
        }}/>,
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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let list = []
        for(let i=0;i<4;i++){
            list.push(i)
        }
        this.state = {
            dataSource: ds.cloneWithRows(list)
        };
    }

    navigateTo(name){
        const {navigate} = this.props.navigation
        navigate(name)
    }

    render() {
        return <ListView dataSource={this.state.dataSource}
                         renderRow={(rowData) => <Item onPress={()=>{this.navigateTo('Profile')}}/>}
                />
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