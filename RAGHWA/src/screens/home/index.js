import React, {useState} from 'react';
import Map from './map/index';
import Cars from './Cars';
import Slots from './Slots';
import {Button, Center, HStack, Icon, Text, Toast, View} from 'native-base';

import {useTranslation} from 'react-i18next';
import {useStorage} from '../../utils/useStorage';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {Alert} from 'react-native';

export default function Home({navigation}) {
  // const {slot, renderSlotView} = Slots;
  // return <MyLocationMapMarker/>
  // const {car, setCar} = useContext(AppContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [car, setCar] = useStorage('car');
  // const [slotDate, setSlotDate] = useState(null);
  const [slot, setSlot] = useState('');
  const getInitialState = () => {
    return {
      // region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      // },
    };
  };
  const [region, setRegion] = useState(getInitialState());
  const {t} = useTranslation();

  const book = () => {
    if (!region.latitude || !region.longitude) {
      Alert.alert(
        t('Missing Information'),
        t('Please select the required location'),
      );
      return true;
    }

    if (!slot.name) {
      Alert.alert(
        t('Missing Information'),
        t('Please select the required slot'),
      );
      return true;
    }

    if (!car.id) {
      Alert.alert(
        t('Missing Information'),
        t('Please select the required car'),
      );
      return true;
    }
    // check if the location is covered

    // checked if the car is selected
    // checked if the slots is selected

    navigation.navigate('Book', {car, slot, region});
  };

  return (
    <>
      <Map region={region} setRegion={setRegion} />
      <Center bg={'#14b8a6'}>
        <HStack
          // bg={'transparent'}
          space={5}
          alignItems="center"
          // flex={1}
          // justifyItems="space-between"          // alignItems="space-between"
          // mb={1}
          // mx={2}
        >
          <View>
            <Cars car={car} setCar={setCar} />
          </View>
          <Button
            borderRadius="full"
            borderWidth="2"
            borderColor="red.700"
            width="70"
            height="70"
            my={2}
            // bg={car?.name && slot?.name ? 'red.400' : 'gray.400'}
            bg={'red.400'}
            // leftIcon={<Icon as={Ionicons} name="calendar" size="sm" />}
            onPress={() => book()}>
            <Text color="white">{t('Book Now')}</Text>
          </Button>
          <View>
            <Slots slot={slot} setSlot={setSlot} />
          </View>
        </HStack>
      </Center>
      {/*<Actions navigation={navigation} />*/}
    </>
  );
}
