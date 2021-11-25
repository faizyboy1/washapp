import React, {useContext} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Home from '../screens/home';
import Terms from '../screens/Terms';
import TellFriend from '../screens/Share';
import Records from './tabs';
import Cars from '../screens/cars';
import {AppContext} from '../utils/AppContext';
import {useTranslation} from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Center, Image} from 'native-base';
import {useAuthRequest} from '../utils/useRequest';

export default function DrawerNavigator({navigation}) {
  const {t} = useTranslation();
  const {setToken, toggleLanguage} = useContext(AppContext);
  // const {} = useContext(LanguageDirectionContext);

  const {response, setParams} = useAuthRequest();

  const logout = () => {
    setParams({url: '/logout', method: 'post'});
    setToken(null);
    return navigation.navigate('Login');
  };

  const Drawer = createDrawerNavigator();

  const fontStyle = {
    fontFamily: 'Almarai-Bold',
    // color: '#0d5e5c',
    fontWeight: '600',
    // fontStyle: 'normal',
  };

  const screenOptionStyle = {
    headerTintColor: 'white',
    headerStyle: {
      // fontFamily: 'Almarai-Bold',
      // color: 'blue',
      // fontWeight: '100',
      // fontStyle: 'normal',
      backgroundColor: '#14b8a6',
    },
    drawerActiveTintColor: '#14b8a6',
    drawerType: 'slide',
  };

  const options = {
    headerTitleStyle: fontStyle,
    drawerStyle: fontStyle,
    drawerLabelStyle: {
      fontFamily: 'Almarai-Bold',
      // color: '#0d5e5c',
      fontWeight: '600',
      // fontStyle: 'normal',
    },
  };

  const HomeOptions = {
    ...options,
    // labelStyle: {fontFamily: 'Almarai', fontWeight: 600, fontStyle: 'normal'},

    title: t('homeTitle'),
    drawerLabel: t('homeTitle'),
    drawerIcon: ({focused}) => (
      <Icon name="home" size={20} color={focused ? '#0d5e5c' : 'grey'} />
    ),
  };

  const RecordsOptions = {
    ...options,
    title: t('My Bookings'),
    drawerLabel: t('My Bookings'),
    drawerIcon: ({focused}) => (
      <Icon name="file-alt" size={25} color={focused ? '#14b8a6' : 'grey'} />
    ),
  };

  const CarsOptions = {
    ...options,
    title: t('carsTitle'),
    drawerLabel: t('carsTitle'),
    drawerIcon: ({focused}) => (
      <Icon name="car" size={20} color={focused ? '#14b8a6' : 'grey'} />
    ),
    // headerRight: () => (
    //     <TouchableOpacity
    //         onPress={() => navigation.navigate('addCar')}
    //         style={{paddingRight: 12}}>
    //         <Icon name="plus" size={20} color="white" />
    //     </TouchableOpacity>
    // ),
  };

  const TellFriendOptions = {
    ...options,
    title: t('Share'),
    drawerLabel: t('Share'),
    drawerIcon: ({focused}) => (
      <Icon name="share" size={20} color={focused ? '#14b8a6' : 'grey'} />
    ),
  };

  const TermsOptions = {
    ...options,
    title: t('Terms and Conditions'),
    drawerLabel: t('Terms and Conditions'),
    drawerIcon: ({focused}) => (
      <Icon
        name="file-contract"
        size={25}
        color={focused ? '#14b8a6' : 'grey'}
      />
    ),
  };

  return (
    <>
      <Drawer.Navigator
        screenOptions={screenOptionStyle}
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <Center p={10}>
                <Image
                  // resizeMode="cover"
                  resizeMode={'contain'}
                  width={100}
                  height={100}
                  // my={4}
                  // p={100}
                  source={require('../assets/images/logo.png')}
                />
              </Center>
              <DrawerItemList {...props} />
              <DrawerItem
                labelStyle={(fontStyle, {textAlign: 'left'})}
                label={t('language')}
                onPress={() => toggleLanguage()}
                icon={({focused}) => (
                  <Icon
                    size={25}
                    name={'globe-asia'}
                    color={focused ? '#14b8a6' : 'grey'}
                  />
                )}
              />

              <DrawerItem
                labelStyle={fontStyle}
                label={t('logout')}
                onPress={() => logout()}
                icon={({focused}) => (
                  <MaterialCommunityIcons
                    size={25}
                    name={'logout'}
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
    </>
  );
}
