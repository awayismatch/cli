
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

class Component extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {onPress} = this.props

        return <TouchableWithoutFeedback onPress={onPress}>
                    <View style={styles.item}>
                        <Image source={{uri: 'http://p1.qzone.la/upload/3/bp6l0xdv.jpg'}}
                               style={styles.image} />

                        <Text style={styles.name}>小镇姑娘</Text>

                    </View>
            </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderColor:'grey',
        borderBottomWidth:1.5,
        borderTopWidth:1.5,
        paddingTop:8,
        paddingBottom:8,
        marginTop:5,

    },
    image:{
        width: 45,
        height: 45,
        marginLeft:5,
    },

    name:{
        flex:1,
        textAlign:'left',
        color:'grey',
        marginLeft:10,
    },

});

export default Component