
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
    static navigationOptions = ({navigation,screenProps})=>({
        title: 'Splash',
        headerRight:'',
        header:null,
    });
    constructor(props){
        super(props)
    }

    render() {
        let {onNext} = this.props
        return (
            <View style={styles.container}>
                <Text>Splash...</Text>
                <Button onPress={onNext} title='下一步'/>
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
        onNext: () => {
            ownProps.navigation.dispatch(resetAction)
            dispatch({type:'demo.increase'})
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)