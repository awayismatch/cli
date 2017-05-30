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
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
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