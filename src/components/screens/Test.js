/**
 * Created by awayisblue on 2017/5/30.
 */
import React from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button,
    ListView
} from 'react-native';

class Component extends React.Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }
    _onNavigatorEvent(event){
        if (event.id == 'backPress') {
            this.props.navigator.toggleTabs({
                to: 'shown', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                animated: false // does the toggle have transition animation or does it happen immediately (optional)
            });
            this.props.navigator.pop()
        }
    }
    _genRows(){
        let rows = []
        for(let i=0;i<100;i++){
            rows.push('chat:'+i)
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

export default Component