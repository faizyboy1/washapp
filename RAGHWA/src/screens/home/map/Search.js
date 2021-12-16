import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// navigator.geolocation = require('@react-native-geolocation-service');
const GooglePlacesInput = props => {
  const {onMarkerChanger} = props;
  console.log({MYLOCATION: props.myPosition});
  const latLong = geometry => {
    console.log(geometry);
    const {width, height} = Dimensions.get('window');
    const ASPECT_RATIO = width / height;

    const latitude = geometry.location.lat;
    const longitude = geometry.location.lng;
    const northeastLat = parseFloat(geometry.viewport.northeast.lat);
    const southwestLat = parseFloat(geometry.viewport.southwest.lat);
    const latitudeDelta = northeastLat - southwestLat;
    const longitudeDelta = latitudeDelta * ASPECT_RATIO;

    return {latitude, longitude, latitudeDelta, longitudeDelta};
  };
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        const region = latLong(details.geometry);
        const description = data.description;
        console.log({description});
        onMarkerChanger(region, description);
        props.toggleModal();
        console.log();
        console.log(data);
      }}
      enablePoweredByContainer={false}
      query={{
        key: 'AIzaSyAtY8K-Tsfpje0nilxI217ZJQn_PGOXesA',
        language: 'ar',
        types: 'establishment',
        location: `${(props.latitude, props.longitude)}`,
        radius: '10',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        type: 'address',
      }}
      GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: ['geometry', 'lodging'],
      }}
      filterReverseGeocodingByTypes={[
        'locality',
        'administrative_area_level_3',
      ]}
      // renderRightButton={() => <Icon name={'search'} size={22} />}
      styles={styles.autoComplete}
    />
  );
};
const styles = StyleSheet.create({
  autoComplete: {
    textInputContainer: {
      flex: 1,
      flexDirection: 'row',
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    textInput: {
      backgroundColor: '#FFFFFF',
      height: 44,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 15,
      flex: 1,
    },
    // poweredContainer: {
    //   justifyContent: 'flex-end',
    //   alignItems: 'center',
    //   borderBottomRightRadius: 5,
    //   borderBottomLeftRadius: 5,
    //   borderColor: '#c8c7cc',
    //   borderTopWidth: 0.5,
    // },
    // powered: {},
    listView: {flex: 1, marginTop: 0},
    // row: {
    //   backgroundColor: '#FFFFFF',
    //   padding: 13,
    //   height: 44,
    //   flexDirection: 'row',
    // },
    // separator: {
    //   height: 0.5,
    //   backgroundColor: '#c8c7cc',
    // },
    // description: {},
    loader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 20,
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
  },
});
export default GooglePlacesInput;
