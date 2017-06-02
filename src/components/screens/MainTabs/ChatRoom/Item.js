

import React from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

class Component extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const onPress = this.props.onPress
        return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container} >
                <View style={styles.roomType}>
                    <Text style={styles.typeText}>男</Text>
                    <Text style={styles.typeText}>女</Text>
                </View>
                <View style={styles.roomStatus}>
                    <Text style={styles.statusText}>21/30</Text>
                    <Text style={styles.statusText}>18/3</Text>
                </View>
                <Text style={styles.roomTopic}>说说租房遇到的奇葩事</Text>
            </View>
        </TouchableWithoutFeedback>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'grey',
        // borderLeftWidth: 3,
        // borderTopWidth: 0,
        // borderRightWidth: 0,
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height:50,

    },
    statusText:{
        textAlign:'center',
        flex:1,
    },
    typeText:{
        textAlign:'center',
        flex:1,
    },
    roomType:{
        width:30,
        borderColor: 'grey',
        borderRightWidth: 0.5,
    },
    roomStatus:{
        width:50,
        borderColor: 'grey',
        // justifyContent: 'center',
        // flexDirection:'column',
        borderRightWidth: 0.5,
    },
    roomTopic:{
        fontSize:20,
        flex:1,
        textAlign:'center',
    }
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