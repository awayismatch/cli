/**
 * Created by John on 2017/5/27.
 */



import { StackNavigator } from 'react-navigation';
import MainTabs from './components/screens/mainTabs'
import Splash from './components/screens/Splash'
import InfoEdit from './components/screens/__global/InfoEdit'

export default StackNavigator({
    // Test: { screen: Splash },
    MainTabs: { screen: MainTabs },
    InfoEdit: { screen: InfoEdit},
});