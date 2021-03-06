
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {NavigationActions} from 'react-navigation'

class App extends Component {
    static navigationOptions = {
        title: 'Test',
    };
    constructor(props){
        super(props)
    }

    render() {
        let {demo,onIncrease,onDecrease} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.demo}>
                    Redux demo:{demo}
                </Text>
                <Button onPress={onIncrease} title='Increase'/>
                <Button onPress={onDecrease} title='Decrease'/>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
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
    const resetAction = NavigationActions.reset({

        index:0,

        actions: [NavigationActions.navigate({ routeName: 'MainTabs'})]
    })
    return {
        onIncrease: () => {
            dispatch({type:'demo.increase'})
        },
        onDecrease: ()=>{
            ownProps.navigation.dispatch(resetAction)
            dispatch({type:'demo.decrease'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)