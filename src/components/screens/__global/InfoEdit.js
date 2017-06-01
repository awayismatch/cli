
import React  from 'react';

import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';
import Picker from 'react-native-picker';
import pickerData from '../../../utils/pickerData';
import ImagePicker from 'react-native-image-crop-picker';
import HeaderButton from './HeaderButton'
class Component extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: '完善个人信息',
        headerRight: <HeaderButton text="确定" outStanding='true'/>,
        headerStyle:{
            backgroundColor:'grey',
        },
        headerTitleStyle:{
            color:'white'
        },
        headerBackTitleStyle:{
            color:'white'
        },
        headerTintColor:'white'
    })
    constructor(props){
        super(props)
        this.onSelectionPress = this.onSelectionPress.bind(this)
        this.onAvatarPress = this.onAvatarPress.bind(this)
    }
    componentWillMount(){
        let {field} = this.props.navigation.state.params
        this.isSelection = false
        this.isAvatar = false
        switch (field){
            case '生日':
                Picker.init({
                    pickerData:pickerData.birthdayData,
                    selectedValue:['1993','08','08']
                })
                this.isSelection = true
                break
            case '性别':
                Picker.init({
                    pickerData:pickerData.genderData,
                    selectedValue:['男']
                })
                this.isSelection = true
                break
            case '地区':
                Picker.init({
                    pickerData:pickerData.regionData,
                    selectedValue:['广东','广州市']
                })
                this.isSelection = true
                break
            case '头像':
                this.isAvatar = true
                break
            default:
        }
    }
    onAvatarPress(){
        this.isAvatar && ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            console.log(image);
        }).catch((err)=>{
            console.log(err)
        });
    }
    onSelectionPress(){
        this.isSelection && Picker.show()
    }
    componentDidMount(){
        this.isSelection && Picker.show()
    }
    render(){
        let {field} = this.props.navigation.state.params
        let content = null
        if(this.isAvatar){
            content = <View style={styles.item}>
                    <Text style={styles.name}>头像</Text>
                    <View style={styles.avatar} >
                        <TouchableWithoutFeedback onPress={this.onAvatarPress}>
                            <Image source={{uri: 'http://p1.qzone.la/upload/3/bp6l0xdv.jpg'}}
                                   style={styles.image}/>
                        </TouchableWithoutFeedback>

                    </View>
                </View>
        }else if(this.isSelection){
            content = <View style={styles.item}>
                         <Text style={styles.name}>{field}</Text>
                         <Text style={styles.content} onPress={this.onSelectionPress}>awayisblue</Text>
                      </View>
        }else{
            content = <View style={styles.inputItem}>
                         <TextInput
                            style={styles.input}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => this.setState({text})}/>
                      </View>
        }
        return <View style={styles.container}>
                    <Text style={styles.desc}>请设置{field}</Text>
                    {content}
                </View>

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'stretch',
        marginTop:10
    },
    item:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        borderColor:'grey',
        borderBottomWidth:1.5,
        borderTopWidth:1.5,
        paddingTop:8,
        paddingBottom:8,
        marginTop:5
    },
    inputItem:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingTop:8,
        paddingBottom:8,
        marginTop:5
    },
    desc:{
        backgroundColor:'#cccccc',
        color:'grey',
        textAlign:'left',
        paddingLeft:5
    },
    name:{
        textAlign:'left',
        color:'grey',
        marginLeft:10
    },
    content:{
        flex:1,
        textAlign:'right',
        marginRight:5,
        color:'grey'
    },
    input:{
        flex:1,
        textAlign:'center',
        marginRight:5,
        color:'grey'
    },
    avatar:{
        flex:1,
        alignItems:'flex-end',
        marginRight:5,
    },
    image:{
        width: 45,
        height: 45
    },

});

export default Component