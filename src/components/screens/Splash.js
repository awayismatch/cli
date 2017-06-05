
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Modal,
    ProgressBarAndroid,
    StatusBar,
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

                <View style={styles.overlay}>
                    <View >
                        <Text style={styles.text}>what </Text>
                    </View>
                </View>
                <Button title={'这'} onPress={()=>{}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    overlay:{
        flexDirection:'column',
        justifyContent:'center',
        alignSelf:'center',
        zIndex:200,
        flex:1,
        position:'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        left:0,
        top:0,
        right:0,
        bottom:0
    },
    text:{
        alignSelf:'center',
    }

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