/**
 * Created by John on 2017/5/31.
 */
import { TabNavigator } from "react-navigation";

import Chat from './Chat'
import Contact from './Contact'
import ChatRoom from './ChatRoom'
import Me from './Me'

const MainTabs = TabNavigator({
    Chat:{screen:Chat},
    Contact:{screen:Contact},
    ChatRoom:{screen:ChatRoom},
    Me:{screen:Me},
},{
    tabBarOptions: {
        activeTintColor: 'yellow',
        labelStyle: {
            fontSize: 12,
        },
        tabStyle: {
            flex:1

        },
        style: {
            backgroundColor: 'grey',
        },
    },
    tabBarPosition:'bottom',
    navigationOptions:{
        headerStyle:{
            backgroundColor:'grey',
        },
        headerTitleStyle:{
            color:'white'
        }
    }
})

export default MainTabs