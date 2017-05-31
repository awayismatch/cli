
import React  from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class Component extends React.Component {
    static navigationOptions = {
        title: '我',
        headerRight: <Button title='设置'/>
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