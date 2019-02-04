import { Navigation } from 'react-native-navigation';


export const goToAuth = () =>Navigation.setRoot({
    root: {
        bottomTabs: {
            children: [{
                stack: {
                    children: [{
                        component: {
                            name: 'Category',
                            passProps: {
                                text: 'This is tab 1'
                            }
                        }
                    }],
                    options: {
                        bottomTab: {
                            text: 'Default',
                            icon: require('../assets/images/login.png'),
                            testID: 'FIRST_TAB_BAR_BUTTON'
                        }
                    }
                }
            },
                {
                    component: {
                        name: 'Category',
                        passProps: {
                            text: 'This is tab 2'
                        },
                        options: {
                            bottomTab: {
                                text: 'Category',
                                icon: require('../assets/images/login.png'),
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                        }
                    }
                }]
        }
    }
});