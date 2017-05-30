/**
 * Created by awayisblue on 2017/5/30.
 */
import {Provider} from 'react-redux'

import {Navigation} from 'react-native-navigation';

import store from './store'
import Chat from './components/screens/main/Chat'
import ChatRoom from './components/screens/main/ChatRoom'
import Contact from './components/screens/main/Contact'
import Me from './components/screens/main/Me'
import Test from './components/screens/Test'


// import {iconsMap} from '../utils/AppIcons'
export default ()=>{
    Navigation.registerComponent('screens.chat', () => Chat,store,Provider);
    Navigation.registerComponent('screens.contact', () => Contact,store,Provider);
    Navigation.registerComponent('screens.chatRoom', () => ChatRoom,store,Provider);
    Navigation.registerComponent('screens.me', () => Me,store,Provider);
    Navigation.registerComponent('screens.test', () => Test,store,Provider);
}
