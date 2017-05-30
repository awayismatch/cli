/**
 * Created by John on 2017/5/27.
 */

import {Provider} from 'react-redux'

import {Navigation} from 'react-native-navigation';

import store from '../store'
import Chat from './screens/Chat'
import ChatRoom from './screens/ChatRoom'
import Contact from './screens/Contact'
import Me from './screens/Me'


// import {iconsMap} from '../utils/AppIcons'

Navigation.registerComponent('screens.chat', () => Chat,store,Provider);
Navigation.registerComponent('screens.contact', () => Contact,store,Provider);
Navigation.registerComponent('screens.chatRoom', () => ChatRoom,store,Provider);
Navigation.registerComponent('screens.me', () => Me,store,Provider);

Navigation.startTabBasedApp({
    tabs:[
        {
            label: '会话',
            screen: 'screens.chat',
            title: '会话',
            icon:require('../images/arrow-down.png'),

        },
        {
            label: '通讯录',
            screen: 'screens.contact',
            title: '通讯录',
            icon:require('../images/arrow-down.png'),
            rightButtons: [
                {
                    title: '好友申请', // for a textual button, provide the button title (label)
                    id: 'fri-request', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                }
            ]
        },
        {
            label: '聊天室',
            screen: 'screens.chatRoom',
            title: '聊天室',
            icon:require('../images/arrow-down.png'),
            rightButtons: [
                {
                    title: '创建', // for a textual button, provide the button title (label)
                    id: 'cr-create', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                }
            ]
        },
        {
            label: '我',
            screen: 'screens.me',
            title: '我',
            icon:require('../images/arrow-down.png'),
            rightButtons: [
                {
                    title: '设置', // for a textual button, provide the button title (label)
                    id: 'setting', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                }
            ]
        }
    ],
});


// export default connect(mapStateToProps,mapDispatchToProps)(App)