/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { Navigation } from 'react-native-navigation';

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Default from './screens/Default'
import Category from './screens/Category'
import Setting from './screens/Setting'


Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('SignIn', () => SignIn);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Default', () => Default);
Navigation.registerComponent('Category', () => Category);
Navigation.registerComponent('Setting', () => Setting);



Navigation.setRoot({
    root: {
        stack: {
            id: 'Home',
            children: [
                {
                    component: {
                        name: 'Home',
                        options: {
                            overlay: {
                                interceptTouchOutside: true
                            }
                        }
                    }
                }
            ],
        }
    }
});
