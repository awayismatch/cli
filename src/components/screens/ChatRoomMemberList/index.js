
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TextInput,
    ListView
} from 'react-native';

import Item from './Item'

class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '聊天室成员',
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
        for(let i=0;i<10;i++){
            list.push(i)
        }
        this.state = {
            dataSource: ds.cloneWithRows(list)
        };
        this.navigateTo = this.navigateTo.bind(this)
    }

    navigateTo(name){
        const {navigate} = this.props.navigation
        navigate(name)
    }

    render() {

        return <View style={styles.container}>
            <ListView dataSource={this.state.dataSource}
                      style={styles.list}
                      renderRow={(rowData) => <Item />}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    list:{
        paddingBottom:20,
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