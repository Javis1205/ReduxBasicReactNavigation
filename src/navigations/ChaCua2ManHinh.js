import { StackNavigator } from 'react-navigation';
import MAN1 from '../screens/ManHinh1';
import MAN2 from '../screens/ManHinh2';
export const CHA = StackNavigator ({
    MAN1 : {
        screen:MAN1,
    },
    MAN2: {
        screen:MAN2,
    }
},{
     headerMode:'screen'
});