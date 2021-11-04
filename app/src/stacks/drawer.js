import React from 'react';
import {TouchableOpacity, I18nManager} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import i18n from '../lang/index';

import Home from '../screens/home';
import Terms from '../screens/terms';
import Cars from '../screens/cars';
import TellFriend from '../screens/tell-friend';
import Records from '../stacks/tabs';

export default function DrawerNavigator({navigation}) {

    const Drawer = createDrawerNavigator();

  const screenOptionStyle = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#14b8a6',
    },
    drawerActiveTintColor: '#14b8a6',
    drawerType: 'slide',
  };

  const HomeOptions = {
    title: i18n.t('homeTitle'),
    drawerLabel: i18n.t('homeTitle'),
    drawerIcon: ({focused}) => (
      <Icon name="home" size={20} color={focused ? '#14b8a6' : 'grey'} />
    ),
  };

  const RecordsOptions = {
    title: i18n.t('recordsTitle'),
    drawerLabel: i18n.t('recordsTitle'),
    drawerIcon: ({focused}) => (
      <Icon name="file-alt" size={25} color={focused ? '#14b8a6' : 'grey'} />
    ),
  };

  const CarsOptions = {
    title: i18n.t('carsTitle'),
    drawerLabel: i18n.t('carsTitle'),
    drawerIcon: ({focused}) => (
      <Icon name="car" size={20} color={focused ? '#14b8a6' : 'grey'} />
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('addCar')}
        style={{paddingRight: 12}}>
        <Icon name="plus" size={20} color="white" />
      </TouchableOpacity>
    ),
  };

  const TellFriendOptions = {
    title: i18n.t('tellFriendTitle'),
    drawerLabel: i18n.t('tellFriendTitle'),
    drawerIcon: ({focused}) => (
      <Icon name="share" size={20} color={focused ? '#14b8a6' : 'grey'} />
    ),
  };

  const TermsOptions = {
    title: i18n.t('termsTitle'),
    drawerLabel: i18n.t('termsTitle'),
    drawerIcon: ({focused}) => (
      <Icon
        name="file-contract"
        size={25}
        color={focused ? '#14b8a6' : 'grey'}
      />
    ),
  };

  return (
    <Drawer.Navigator
      screenOptions={screenOptionStyle}
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label={i18n.t('language')}
              onPress={() =>
                i18n
                  .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
                  .then(() => {
                    I18nManager.forceRTL(i18n.language === 'ar');
                  })
                  .catch(function (error) {
                    alert(
                      'There has been a problem with your fetch operation: ' +
                        error.message,
                    );
                    // ADD THIS THROW error
                    throw error;
                  })
              }
              icon={({focused}) => (
                <Icon
                  size={25}
                  name={'globe-asia'}
                  color={focused ? '#14b8a6' : 'grey'}
                />
              )}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Home" component={Home} options={HomeOptions} />
      <Drawer.Screen
        name="Records"
        component={Records}
        options={RecordsOptions}
      />
      <Drawer.Screen name="Cars" component={Cars} options={CarsOptions} />
      <Drawer.Screen
        name="TellFriend"
        component={TellFriend}
        options={TellFriendOptions}
      />
      <Drawer.Screen
        name="TermsAndConditions"
        component={Terms}
        options={TermsOptions}
      />
    </Drawer.Navigator>
  );
}
