import React, {useContext, useState} from 'react';
import {Box, Button, Text, View, Radio, HStack} from 'native-base';
import Coupon from './Coupon';
import {useTranslation} from 'react-i18next';
import CardPayment from './CardPayment';
import {AppContext} from '../../utils/AppContext';
import header from 'react-native/Libraries/NewAppScreen/components/Header';
import {request} from '../../utils/useRequest';
import {Alert} from 'react-native';

export default ({navigation, route}) => {
  const {tokenHeader} = useContext(AppContext);
  const {car, slot, region} = route.params;
  const [couponDiscount, setCouponDiscount] = useState(null);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(2);
  const {t} = useTranslation();

  const submit = () => {
    const data = {
      booked_date: '14-11-2021',
      address_id: 1, //todo insert new address if there is no address
      payment_method_id: paymentMethod,
      car_id: car.id,
      services: [3, 4, 5],
      slot_id: slot.id,
      coupon: 'q',
    };

    request(
      ...tokenHeader,
      ...{
        method: 'post',
        url: '/bookings',
        data,
      },
    )
      .then(r => Alert.alert(t('Success', 'Success')))
      .catch(e => console.log(e));
  };

  const renderPaymentMethod = () => {
    if (paymentMethod == 1) {
      return;
    }

    return <CardPayment />;
  };

  return (
    <Box m={4}>
      <Text>{car.name}</Text>
      <Text>{slot.slot_date + ' ' + slot.name}</Text>
      <Text>{region.latitude}</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>{t('Total') + ': ' + total}</Text>

      {typeof couponDiscount === 'number' && (
        <Text>
          {t('Discount')}% {couponDiscount}
        </Text>
      )}

      <Coupon
        couponDiscount={couponDiscount}
        setCouponDiscount={setCouponDiscount}
      />
      <Radio.Group
        defaultValue="2"
        name="paymentMethod"
        onChange={nextValue => {
          setPaymentMethod(nextValue);
        }}>
        <HStack space={3} alignItems="center">
          <Radio value="2" my="1">
            {t('Card')}
          </Radio>
          <Radio value="1" my="1">
            {t('Cash')}
          </Radio>
        </HStack>
      </Radio.Group>
      {renderPaymentMethod()}

      <Button onPress={submit}>
        {paymentMethod == 2 ? t('Confirm & Pay') : t('Confirm')}
      </Button>
    </Box>
  );
};
