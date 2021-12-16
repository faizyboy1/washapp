import React, {memo, useContext, useState} from 'react';
import {
  extendTheme,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import {View, FlatList} from 'react-native';
import {globalStyles} from '../../assets/style/global-styling';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Divider from '../../components/divider';
import {AppContext} from '../../utils/AppContext';

function records({navigation}) {
  const {user, setUser, tokenHeader} = useContext(AppContext);
  const [booking, setBooking] = useState(user.client_bookings);
  const theme = extendTheme();
  const UpcominBookings = bookings => {
    return (
      <View style={globalStyles.termsHeader}>
        <HStack space={3} alignItems="center">
          <VStack>
            <Text> Sunday </Text>
            <Text> {bookings.slot['slot_date']} </Text>
          </VStack>
          <Text w="20" variant="textRight">
            {' '}
            {bookings.slot['name']}{' '}
          </Text>
          <Text w="20" variant="textRight">
            {' '}
            {bookings.car.car_type_id === 1 ? 'Family Car' : 'Sedan Car'}{' '}
          </Text>
          <Icon
            size={20}
            name="edit"
            style={globalStyles.rescheduleIcon}
            onPress={() => navigation.navigate('UpcomingUpdate', bookings)}
          />
          <Icon size={20} name="info" style={globalStyles.rescheduleIcon} />
        </HStack>
        <Divider />
      </View>
    );
  };
  if (booking.length > 0) {
    return (
      <>
        <FlatList
          data={booking}
          keyExtractor={booking => booking.id.toString()}
          renderItem={({item}) => UpcominBookings(item)}
        />
      </>
    );
  }
  return <Text> There is no Record </Text>;
}
export default memo(records);
