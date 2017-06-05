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
import Profile from './components/screens/Profile'
import AddFriend from './components/screens/AddFriend'
import MessagePanel from './components/screens/MessagePanel'
import ChatRoomMemberList from './components/screens/ChatRoomMemberList'
import ChatRoomProfile from './components/screens/ChatRoomProfile'
import InfoEdit from './components/InfoEdit'

export default StackNavigator({
    ChatRoomProfile: { screen: ChatRoomProfile },
    ChatRoomMemberList: { screen: ChatRoomMemberList },
    MainTabs: { screen: MainTabs },
    MessagePanel: { screen: MessagePanel },
    Splash: { screen: Splash },
    AddFriend: { screen: AddFriend },
    Profile: { screen: Profile },
    FriendRequest: { screen: FriendRequest },
    SearchUser: { screen: SearchUser },
    InfoEdit: { screen: InfoEdit},
    ChatRoomDetails: { screen: ChatRoomDetails },

    ChatRoomCreation: { screen: ChatRoomCreation },

});