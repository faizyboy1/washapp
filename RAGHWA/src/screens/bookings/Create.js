import React, {useState} from 'react';
import {Box, Text, View} from 'native-base';
import Coupon from './Coupon';
import {useTranslation} from 'react-i18next';

export default ({navigation, route}) => {
  const {car, slot, region} = route.params;
  const [couponDiscount, setCouponDiscount] = useState(null);
  const [total, setTotal] = useState(0);
  const {t} = useTranslation();

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
    </Box>
  );
};
