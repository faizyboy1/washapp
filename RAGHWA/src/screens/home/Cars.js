import React, {useContext, useState} from 'react';
import {
  Actionsheet,
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Pressable,
  ScrollView,
  Text,
  useDisclose,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useTranslation} from 'react-i18next';
import {CarModal} from '../cars/Modal';
import {AppContext} from '../../utils/AppContext';

export default function ({car, setCar}) {
  const {isOpen, onOpen, onClose} = useDisclose();
  const {t} = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const {user, setUser} = useContext(AppContext);

  // console.log(user.cars, user.cars.length);

  // setUser(user =>
  //   user.cars.push({
  //     color: 'yellow',
  //     created_at: '2021-11-14T10:21:26.000000Z',
  //     id: 201,
  //     name: 'added by system',
  //     plate_number: 'ABCD 6545',
  //     updated_at: '2021-11-14T10:21:26.000000Z',
  //     user_id: 1,
  //   }),
  // );

  // const [car, setCar] = useState(null);
  // let car = null;
  // useEffect(() => {
  //   console.log('effect');
  //   onClose();
  // }, [setCar]);

  const renderCars = () => {
    return user.cars.map(c => (
      <Pressable
        mx={4}
        borderWidth="1"
        borderColor="teal.400"
        _focus={{bg: 'teal.400'}}
        // _pressed={{bg: 'secondary.500'}}
        bg={car?.id === c.id ? 'teal.100' : 'white'}
        rounded="md"
        py={2}
        px={3}
        alignSelf="center"
        onPress={() => onClose(setCar(c))}
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
          <Icon as={Ionicons} name="car-sport" color="blue.100" />
          <Text>{c.name}</Text>
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

  return (
    <Center>
      <Text color={'white'}>{car?.name}</Text>
      <Button
        borderColor={'primary.200'}
        borderWidth={2}
        mt={1}
        leftIcon={<Icon as={Ionicons} name="car-sport" size="sm" />}
        onPress={onOpen}>
        {t('Car')}
      </Button>
      <Actionsheet
        isOpen={isOpen}
        onClose={() => onClose(setShowModal(false))}
        size="full">
        <Actionsheet.Content>
          <Text
            mb={5}
            fontSize="16"
            color="gray.500"
            _dark={{
              color: 'gray.300',
            }}>
            {t('Choose the car')}
          </Text>
          <ScrollView mb={5} horizontal={true} w="100%">
            {renderCars()}
            {/*<Actionsheet.Item*/}
            {/*  startIcon={*/}
            {/*    <Icon*/}
            {/*      as={MaterialIcons}*/}
            {/*      name="share"*/}
            {/*      color="trueGray.400"*/}
            {/*      mr="1"*/}
            {/*      size="6"*/}
            {/*    />*/}
            {/*  }>*/}
            {/*  Share*/}
            {/*</Actionsheet.Item>*/}
            {/*<Actionsheet.Item*/}
            {/*  startIcon={*/}
            {/*    <Icon*/}
            {/*      as={Ionicons}*/}
            {/*      name="play-circle"*/}
            {/*      color="trueGray.400"*/}
            {/*      mr="1"*/}
            {/*      size="6"*/}
            {/*    />*/}
            {/*  }>*/}
            {/*  Play*/}
            {/*</Actionsheet.Item>*/}
          </ScrollView>
          <Actionsheet.Item
            onPress={() => setShowModal(true)}
            startIcon={
              <Icon
                as={FontAwesome}
                color="trueGray.400"
                mr="1"
                size="6"
                name="plus"
              />
            }>
            {t('Add new Car')}
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <Box>
        <CarModal
          setShowModal={setShowModal}
          showModal={showModal}
          setCar={setCar}
        />
      </Box>
    </Center>
  );
}
