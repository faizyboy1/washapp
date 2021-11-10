// import React from 'react';
// import {Text, View} from 'react-native';
// import {globalStyles} from '../../assets/style/global-styling';
// //import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import {useTranslation} from 'react-i18next';
// import MMKVStorage from 'react-native-mmkv-storage';
//
// export default function home({navigation}) {
//   const MMKV = new MMKVStorage.Loader().initialize();
//   const token = MMKV.getString('token');
//   const {t} = useTranslation();
//
//   return (
//     <View style={globalStyles.loginView}>
//       <Text
//         style={{textAlign: 'center'}}
//         onPress={() => navigation.navigate('ConfirmAddress')}>
//         {token}
//       </Text>
//       {/*<Button onPress={()=>setToken('hello')}>testing token</Button>*/}
//     </View>
//   );
// }
import React, {useEffect, useState} from 'react';
import {View, Text, Switch, Button, Platform, PermissionsAndroid, StyleSheet} from 'react-native';
import {globalStyles} from '../../assets/style/global-styling';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import isEqual from 'lodash/isEqual';
// import {useTranslation} from 'react-i18next';
// import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';


export default function home({navigation}) {

    const getInitialState = ()=> {
        return {
            // region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            // },
        };
    }

    useEffect(()=>{
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ).then(granted => {
                if (granted && this.mounted) {
                    watchLocation();
                }
            });
        } else {
            watchLocation();
        }
    },[])


    const  watchLocation = ()=> {
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const myLastPosition = this.state.myPosition;
                const myPosition = position.coords;
                if (!isEqual(myPosition, myLastPosition)) {
                    this.setState({ myPosition });
                }
            },
            null,
            GEOLOCATION_OPTIONS
        );
    }

    const onRegionChange= (region) =>{
        this.setState({ region });
    }
    const [region,setRegion]=useState(getInitialState());
    const [myPosition,setMyPosition]= useState();
    // return <MyLocationMapMarker/>

    // const {t, i18n} = useTranslation();
    // const MMKV = new MMKVStorage.Loader().initialize();
    // const [token, setToken] = useMMKVStorage("token", MMKV, '6|G2RVoGmeeeOQIsFcwLrO1KHknhh-OTP3q06FCuqqc');
    return (
        <View style={globalStyles.loginView}>
            {console.log('hi hidsf')}

            {/*<Text>{token}</Text>*/}
            {/*<MapView*/}
            {/*    region={region}*/}
            {/*    onRegionChange={(region)=> onRegionChange(region)}*/}
            {/*/>*/}
            <MapView style={{flex: 1}}
                     provider={PROVIDER_GOOGLE}
                     region={region} showsUserLocation={true}
                // onRegionChange={(region)=>setRegion(region)}
            >

                <Marker
                    anchor={ANCHOR}
                    style={styles.mapMarker}
                    coordinate={region}
                >
                    <View style={styles.container}>
                        <View style={styles.markerHalo} />

                        <View style={styles.marker}>
                            <Text style={styles.markerText}>
                            </Text>
                        </View>
                    </View>
                </Marker>

                <Marker
                    coordinate={region}
                    onSelect={e => console.log('onSelect', e)}
                    onDrag={e => console.log('onDrag', e)}
                    onDragStart={e => console.log('onDragStart', e)}
                    onDragEnd={e => console.log('onDragEnd', e)}
                    onPress={e => console.log('onPress', e)}
                    draggable/>
                {/*</Marker>*/}
                {/*<Marker draggable*/}
                {/*    key={45}*/}
                {/*    coordinate={{*/}
                {/*        latitude: 37.78825,*/}
                {/*        longitude: -122.4324*/}
                {/*    }}*/}
                {/*    title={'marker.title'}*/}
                {/*    description={'marker.description'}*/}
                {/*    image={require('../assets/logo.png')}*/}
                {/*        onDragEnd={(e) =>*/}
                {/*            // setRegion({ latitude: e.nativeEvent.coordinate })*/}
                {/*        console.log(e.nativeEvent.coordinate)*/}
                {/*        }*/}
                {/*/>*/}
            </MapView>
            <Text
                style={{textAlign: 'center'}}
                onPress={() => navigation.navigate('ConfirmAddress')}>
                {/*{t('Welcome')}*/}
            </Text>
        </View>
    );
}
const GEOLOCATION_OPTIONS = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 1000,
};
const ANCHOR = { x: 0.5, y: 0.5 };
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
    markerText: { width: 0, height: 0 },
});
