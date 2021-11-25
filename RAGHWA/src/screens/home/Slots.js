import React, {useContext, useEffect, useState} from 'react';
import {
  Actionsheet,
  Button,
  Flex,
  Icon,
  Pressable,
  ScrollView,
  Text,
  Toast,
  useDisclose,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useTranslation} from 'react-i18next';
import {AppContext} from '../../utils/AppContext';

import Spinner from '../../components/spinner';
import {request} from '../../utils/useRequest';

export default ({slot, setSlot}) => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const {t} = useTranslation();
  const [slotDate, setSlotDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]);
  const {tokenHeader} = useContext(AppContext);
  const renderDates = () => {
    console.log(slots, loading);
    if (loading) {
      return <Spinner />;
    }
    if (!slots) {
      return;
    }

    return Object.keys(slots).map(function (key, index) {
      return (
        <Pressable
          mx={4}
          borderWidth="1"
          borderColor="teal.400"
          // _focus={{bg: 'teal.400'}}
          // _pressed={{bg: 'secondary.500'}}
          bg={slotDate == key ? 'teal.100' : 'white'}
          rounded="md"
          py={2}
          px={3}
          alignSelf="center"
          onPress={() => setSlotDate(key)}>
          <Flex direction="row" align="baseline" justify="space-between">
            <Icon
              as={Ionicons}
              name="calendar-outline"
              size={5}
              mx={2}
              color="black"
            />
            <Text>{key}</Text>
          </Flex>
        </Pressable>
      );
    });
  };

  const renderSlots = () => {
    if (!slotDate || !(slots[slotDate] instanceof Array)) {
      return;
    }

    // return slots[slotDate].map(s => {
    //   return <Text>{s.name}</Text>;
    //   // myObject[key] *= 2;
    // });

    return slots[slotDate].map(s => (
      <Pressable
        mx={4}
        borderWidth="1"
        borderColor="teal.400"
        _focus={{bg: 'teal.400'}}
        // _pressed={{bg: 'secondary.500'}}
        bg={slot == s ? 'teal.100' : 'white'}
        rounded="md"
        py={2}
        px={3}
        alignSelf="center"
        onPress={() => onClose(setSlot(s))}
        // startIcon={
        //   <Icon
        //     as={Ionicons}
        //     color={car.color}
        //     mr="1"
        //     size="8"
        //     name="car-sport"
        //   />
        // }
        // rightIcon={
        //   <Icon as={FontAwesome} color="green" ml="1" size="5" name="pencil" />
        // }>
      >
        <Flex direction="row" align="baseline" justify="space-between">
          {/*<Icon as={Ionicons} name="car-sport" color="blue.100" />*/}
          <Text>{s.name}</Text>
        </Flex>
      </Pressable>

      // <Actionsheet.Item
      //   onPress={() => setCar(car)}
      //   startIcon={
      //     <Icon
      //       as={Ionicons}
      //       color={car.color}
      //       mr="1"
      //       size="8"
      //       name="car-sport"
      //     />
      //   }
      //   rightIcon={
      //     <Icon as={FontAwesome} color="green" ml="1" size="5" name="pencil" />
      //   }>
      //   <Box justify="space-between">
      //     <Text>
      //       {car.name} dafdsaffadsfdsafdsafdsfdsafadsfdsafdsaf adsdsafdsaf dsafs
      //       dsafdsa
      //     </Text>
      //   </Box>
      // </Actionsheet.Item>
    ));
  };

  const loadSlots = () => {
    console.log(loading);
    setLoading(true);
    console.log('loading......', loading);
    const params = {
      ...tokenHeader,
      ...{
        url: 'bookings/slots',
      },
    };
    request(params)
      .then(response => {
        setSlots(response.data);
      })
      .catch(error => {
        Toast.show({
          status: 'error',
          description: error.response?.data?.message ?? t('Error'),
          title: t('Something went wrong'),
        });
      });
    setLoading(false);
  };

  return (
    <>
      <Text color={'white'}>
        {slot ? slot.slot_date + '  ' + slot?.name : ''}
      </Text>
      <Button
        borderColor={'primary.200'}
        borderWidth={2}
        mt={1}
        leftIcon={<Icon as={Ionicons} name="calendar" size="sm" />}
        onPress={() => onOpen(loadSlots())}>
        {t('Date')}
      </Button>

      <Actionsheet isOpen={isOpen} onClose={() => onClose()} size="full">
        <Actionsheet.Content>
          <Text
            mb={5}
            fontSize="16"
            color="gray.500"
            _dark={{
              color: 'gray.300',
            }}>
            {t('Choose the date')}
          </Text>
          <ScrollView mb={5} horizontal={true} w="100%">
            {renderDates()}
          </ScrollView>
          <ScrollView mb={5} horizontal={true} w="100%">
            {renderSlots()}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
