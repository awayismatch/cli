
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    ListView
} from 'react-native';



import HeaderButton from '../../HeaderButton'
import Item from './Item'
import InputControl from './InputControl'

class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '某某聊天室',
        headerRight: <View style={{flexDirection:'row'}}><HeaderButton text="成员" /><HeaderButton text="详情"/></View>,
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
    }
    render() {

        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                          style={styles.list}
                          renderRow={(rowData) => <Item self={!!(rowData%2)}/>}/>
                <InputControl/>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    list:{
        flex:1,
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