import {Navigation} from 'react-native-navigation';


export const goToAuth = () => Navigation.setRoot({

    root: {

        sideMenu : {

            left : {

                component : {
                    name : 'Setting',
                }


            },

            center: {


                bottomTabs: {
                    id: 'BottomTabsId',
                    children: [
                        {
                            component: {
                                name: 'Default',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        text: 'Home',
                                        icon: require('../assets/images/login.png'),
                                        forceTitlesDisplay: true,

                                    }
                                }
                            },
                        },
                        {
                            component: {
                                name: 'ProductCategory',
                                options: {
                                    bottomTab: {
                                        text: 'Category',
                                        fontSize: 12,
                                        icon: require('../assets/images/login.png'),
                                        forceTitlesDisplay: true,
                                    }
                                }
                            },
                        },
                        {
                            component: {
                                name: 'Setting',
                                options: {
                                    bottomTab: {
                                        text: 'Setting',
                                        fontSize: 12,
                                        icon: require('../assets/images/login.png'),
                                        forceTitlesDisplay: true,
                                    }
                                }
                            },
                        },

                    ],
                }
            },



            right : {

                component : {
                    name : 'Setting'
                }

            }

        },




    }




});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
})