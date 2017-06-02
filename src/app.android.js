/**
 * Created by John on 2017/5/27.
 */



import { StackNavigator } from 'react-navigation';
import MainTabs from './components/screens/MainTabs'
import Splash from './components/screens/Splash'
import ChatRoomCreation from './components/screens/ChatRoomCreation'
import ChatRoomDetails from './components/screens/ChatRoomDetails'
import FriendRequest from './components/screens/ContactRequest'
import SearchUser from './components/screens/SearchUser'
import InfoEdit from './components/InfoEdit'

export default StackNavigator({
    MainTabs: { screen: MainTabs },
    FriendRequest: { screen: FriendRequest },
    SearchUser: { screen: SearchUser },
    InfoEdit: { screen: InfoEdit},
    ChatRoomDetails: { screen: ChatRoomDetails },
    Splash: { screen: Splash },
    ChatRoomCreation: { screen: ChatRoomCreation },

});