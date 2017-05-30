/**
 * Created by John on 2017/5/27.
 */


import {Navigation} from 'react-native-navigation';

import registerScreens from './registerScreens'
registerScreens()
Navigation.startTabBasedApp({
    tabs:[
        {
            label: '会话',
            screen: 'screens.chat',
            title: '会话',
            icon:require('./images/arrow-down.png'),

        },
        {
            label: '通讯录',
            screen: 'screens.contact',
            title: '通讯录',
            icon:require('./images/arrow-down.png'),
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
            icon:require('./images/arrow-down.png'),
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
            icon:require('./images/arrow-down.png'),
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