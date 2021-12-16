import React, {useEffect, useRef, useContext, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {globalStyles} from '../../../assets/style/global-styling';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import isEqual from 'lodash/isEqual';
import {Box, Text, View} from 'native-base';
import Geolocation from 'react-native-geolocation-service';
import Search from './Search';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import ModalFavouriteAddresses from '../../../components/ModalFavouriteAddresses';
import Search from './Search';
import AppIcon from '../../../components/AppIcon';
import colors from '../../../components/config/colors';
import {AppContext} from '../../../utils/AppContext';
import {request} from '../../../utils/useRequest';
import {useTranslation} from 'react-i18next';
import {useAuthRequest} from '../../../utils/useRequest';

export default ({region, setRegion}) => {
  const [myPosition, setMyPosition] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const {user, setUser, setToken, tokenHeader} = useContext(AppContext);
  const [address, setAddress] = useState(user.addresses);
  const [favAddress, setFavAddress] = useState();
  const {response, setParams} = useAuthRequest();
  const {t} = useTranslation();
  console.log('============================');
  console.log(address);
  console.log('============================');

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(granted => {
        if (granted) {
          watchLocation();
        }
      });
    } else {
      watchLocation();
    }
  }, []);
  useEffect(() => {
    request({
      ...tokenHeader,
      ...{
        method: 'get',
        url: `/addresses`,
      },
    })
      .then(r => {
        console.log('*********');
        console.log(r.data);
        console.log('*********');
        setAddress(r.data);
      })
      .catch(e => {
        if (e.response.status === 401) {
          setParams({url: '/logout', method: 'post'});
          setToken(null);
          return navigation.navigate('Login');
        }
      });
  }, [address]);
  const watchLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log({latitude, longitude});
        const newPosition = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        if (!isEqual(myPosition, newPosition)) {
          setRegion(newPosition);
          setMyPosition(newPosition);
        }
      },
      // success => console.log('success', success),
      error => console.log(error),
      GEOLOCATION_OPTIONS,
    );
  };

  //To change the marker we are getting the lat long from the autoComplete Api
  const markerChanger = (region, description) => {
    if (region) {
      setRegion(region);
      setFavAddress(description);
    }
  };
  // when the location will change this will called
  const onRegionChange = region => {
    setRegion({
      latitude: Number(region.latitude),
      longitude: Number(region.longitude),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(region);
  };
  //**********************************************************/
  //This method is
  const toggleModal = () => {
    setAddress(user.addresses);
    setModalVisible(!isModalVisible);
  };
  //To add the favourite address we will send request to the server
  const addFavouriteAddress = () => {
    console.log({favAddress});
    if (favAddress) {
      request({
        ...tokenHeader,
        ...{
          method: 'post',
          url: '/addresses',
          data: {
            name: favAddress,
            latitude: region.latitude,
            longitude: region.longitude,
          },
        },
      })
        .then(r => {
          Alert.alert(t('Success', 'Success'));
        })
        .catch(e => {
          if (e.response.status === 401) {
            setParams({url: '/logout', method: 'post'});
            setToken(null);
            return navigation.navigate('Login');
          }
        });
    } else {
      Alert.alert(t('Please Search The address', 'Please Search The address'));
    }
  };
  return (
    <>
      <Box style={globalStyles.loginView} bg={'red.100'}>
        <View style={{position: 'absolute', top: 10, width: '100%'}}>
          <View style={{zIndex: 1, flexDirection: 'row'}}>
            <ModalFavouriteAddresses icon="heart" item={address} />
            {/* <Icon
              onPress={() => setModalVisible(!isModalVisible)}
            /> */}
            <Icon
              name={'search'}
              size={22}
              color={colors.black}
              onPress={() => setModalVisible(!isModalVisible)}
            />
            <View style={{flex: 1}}>
              <Modal isVisible={isModalVisible}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name={'bookmark'}
                    color={colors.black}
                    onPress={addFavouriteAddress}
                    size={35}
                  />

                  <Search
                    myPosition={myPosition}
                    onMarkerChanger={markerChanger}
                    toggleModal={() => toggleModal()}
                  />
                  <View onTouchStart={toggleModal}>
                    <AppIcon
                      name="times"
                      iconColor={colors.black}
                      backgroundColor={colors.danger}
                      size={30}
                      style={{selfAlign: ''}}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          region={region}
          initialRegion={region}
          showsUserLocation={true}
          showsMyLocationButton={true}
          userLocationCalloutEnabled={true}
          followsUserLocation={true}
          // showsMyLocationButton={true}
          userLocationPriority={'high'}
          // onRegionChange={(region)=>setRegion(region)}
        >
          <Marker
            draggable
            coordinate={region}
            onDragEnd={e => {
              onRegionChange(e.nativeEvent.coordinate);
            }}
          />

          {/*<Marker*/}
          {/*    anchor={ANCHOR}*/}
          {/*    style={styles.mapMarker}*/}
          {/*    coordinate={region}*/}
          {/*>*/}
          {/*    <View style={styles.container}>*/}
          {/*        <View style={styles.markerHalo} />*/}

          {/*        <View style={styles.marker}>*/}
          {/*            <Text style={styles.markerText}>*/}
          {/*            </Text>*/}
          {/*        </View>*/}
          {/*    </View>*/}
          {/*</Marker>*/}

          {/*<Marker*/}
          {/*  coordinate={region}*/}
          {/*  onSelect={e => console.log('onSelect', e)}*/}
          {/*  onDrag={e => console.log('onDrag', e)}*/}
          {/*  onDragStart={e => console.log('onDragStart', e)}*/}
          {/*  onDragEnd={e => console.log('onDragEnd', e)}*/}
          {/*  onPress={e => console.log('onPress', e)}*/}
          {/*  draggable*/}
          {/*/>*/}
          {/*</Marker>*/}
          {/*<Marker draggable*/}
          {/*    key={45}*/}
          {/*    coordinate={{*/}
          {/*        latitude: 37.78825,*/}
          {/*        longitude: -122.4324*/}
          {/*    }}*/}
          {/*    title={'marker.title'}*/}
          {/*    description={'marker.description'}*/}
          {/*    image={require('../../assets/images/logo.png')}*/}
          {/*        onDragEnd={(e) =>*/}
          {/*            // setRegion({ latitude: e.nativeEvent.coordinate })*/}
          {/*        console.log(e.nativeEvent.coordinate)*/}
          {/*        }*/}
          {/*/>*/}
        </MapView>
        {/*<Text*/}
        {/*  style={{textAlign: 'center'}}*/}
        {/*  onPress={() => navigation.navigate('ConfirmAddress')}>*/}
        {/*  /!*{t('Welcome')}*!/*/}
        {/*</Text>*/}
      </Box>
    </>
  );
};
const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 10000,
};
const ANCHOR = {x: 0.5, y: 0.5};
const SIZE = 35;
const HALO_RADIUS = 6;
const ARROW_SIZE = 7;
const ARROW_DISTANCE = 6;
const HALO_SIZE = SIZE + HALO_RADIUS;
const HEADING_BOX_SIZE = HALO_SIZE + ARROW_SIZE + ARROW_DISTANCE;

const colorOfmyLocationMapMarker = 'blue';
const styles = StyleSheet.create({
  mapMarker: {
    zIndex: 1000,
  },
  // The container is necessary to protect the markerHalo shadow from clipping
  container: {
    width: HEADING_BOX_SIZE,
    height: HEADING_BOX_SIZE,
  },
  heading: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: HEADING_BOX_SIZE,
    height: HEADING_BOX_SIZE,
    alignItems: 'center',
  },
  headingPointer: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: ARROW_SIZE * 0.75,
    borderBottomWidth: ARROW_SIZE,
    borderLeftWidth: ARROW_SIZE * 0.75,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colorOfmyLocationMapMarker,
    borderLeftColor: 'transparent',
  },
  markerHalo: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    width: HALO_SIZE,
    height: HALO_SIZE,
    borderRadius: Math.ceil(HALO_SIZE / 2),
    margin: (HEADING_BOX_SIZE - HALO_SIZE) / 2,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  marker: {
    justifyContent: 'center',
    backgroundColor: colorOfmyLocationMapMarker,
    width: SIZE,
    height: SIZE,
    borderRadius: Math.ceil(SIZE / 2),
    margin: (HEADING_BOX_SIZE - SIZE) / 2,
  },
  markerText: {width: 0, height: 0},
});
