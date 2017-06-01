/**
 * Created by John on 2017/5/27.
 */



import { StackNavigator } from 'react-navigation';
import MainTabs from './components/screens/mainTabs'
import Splash from './components/screens/Splash'
import ChatRoomCreation from './components/screens/ChatRoom/Creation'
import ChatRoomDetails from './components/screens/ChatRoom/Details'
import InfoEdit from './components/screens/__global/InfoEdit'

export default StackNavigator({

    MainTabs: { screen: MainTabs },
    InfoEdit: { screen: InfoEdit},
    ChatRoomDetails: { screen: ChatRoomDetails },
    Splash: { screen: Splash },
    ChatRoomCreation: { screen: ChatRoomCreation },
});