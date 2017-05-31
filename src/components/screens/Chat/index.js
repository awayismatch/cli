
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button,
    ListView
} from 'react-native';
import Item from './Item'
class Component extends React.Component {
    static navigationOptions = {
        title: '会话',
        backgroundColor: 'grey',
    };
    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let list = []
        for(let i=0;i<20;i++){
            list.push(i)
        }
        this.state = {
            dataSource: ds.cloneWithRows(list)
        };
    }
    render() {

        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={(rowData) => <Item/>}
            >

            </ListView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    demo: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
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