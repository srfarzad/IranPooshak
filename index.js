/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { Navigation } from 'react-native-navigation';

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Default from './screens/Default'
import ProductCategory from './screens/ProductCategory'
import Setting from './screens/Setting'
import Webview from './screens/Webview'


Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('SignIn', () => SignIn);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Default', () => Default);
Navigation.registerComponent('ProductCategory', () => ProductCategory);
Navigation.registerComponent('Setting', () => Setting);
Navigation.registerComponent('Webview', () => Webview);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({

        root : {

            stack : {
                id:'AppStack',
                children : [
                    {
                        component : {
                            name : 'Home' ,
                            options : {
                                topBar : {
                                    title : {
                                        text : 'App'
                                    }, rightButtons : [{
                                        id : 'SaveId',
                                        text : 'Save',


                                    }],

                                }



                            }
                        },
                    }
                ]
            }
        }

    });
});