
import {connect} from 'react-redux'
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ListView
} from 'react-native';
class Component extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }
    _onNavigatorEvent(event){
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'fri-request') {
                this.props.navigator.push({
                    screen: 'screens.test', // unique ID registered with Navigation.registerScreen
                    title: '好友申请', // navigation bar title of the pushed screen (optional)
                    overrideBackPress:true,
                    passProps: {}, // Object that will be passed as props to the pushed screen (optional)
                    animated: true, // does the push have transition animation or does it happen immediately (optional)
                    backButtonTitle: undefined, // override the back button title (optional)
                    backButtonHidden: false, // hide the back button altogether (optional)
                    navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
                    navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
                })
                this.props.navigator.toggleTabs({
                    to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                    animated: false // does the toggle have transition animation or does it happen immediately (optional)
                });
            }
        }
    }
    _genRows(){
        let rows = []
        for(let i=0;i<100;i++){
            rows.push('contact:'+i)
        }
        return rows
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
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
    return {
        onIncrease: () => {
            dispatch({type:'demo.increase'})
        },
        onDecrease: ()=>{
            dispatch({type:'demo.decrease'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Component)