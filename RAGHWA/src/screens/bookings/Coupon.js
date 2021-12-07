import React, {useState, useRef, useContext} from 'react';
import {
  Popover,
  Button,
  Box,
  Center,
  useDisclose,
  FormControl,
  Input,
  Toast,
  Text, VStack, HStack,
  Radio, Flex,
} from 'native-base';
import {useTranslation} from 'react-i18next';
import {request} from '../../utils/useRequest';
import {AppContext} from '../../utils/AppContext';

export default ({couponDiscount, setCouponDiscount, coupon, setCoupon}) => {
  const {t} = useTranslation();
  const {isOpen, onOpen, onClose} = useDisclose();
  const initialFocusRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const {tokenHeader, setToken} = useContext(AppContext);
  const verify = () => {
    setLoading(true);

    const params = {
      ...tokenHeader,
      ...{
        url: `coupons/check/${coupon}`,
      },
    };
    request(params)
      .then(response => {
        setLoading(false);
        setCouponDiscount(response.data);
      })
      .catch(error => {
        if (error.response?.status == 401) {
          setToken(null);
        }
        console.log(error.message);
        Toast.show({
          status: 'error',
          description: error.response?.data?.message ?? t('Error'),
          title: t('Something went wrong'),
        });
      });
    setLoading(false);
  };

  return (
      <Flex my={3}>
        <HStack>
              <Input
                value={coupon}
                onChangeText={value => setCoupon(value)}
                rounded="sm"
                fontSize="xs"
                backgroundColor="white"
                mx="3"
                placeholder=""
                w={{
                  base: "60%",
                  md: "60%",
                }}
                ref={initialFocusRef}
              />
              <Button
                  size="sm" variant="outline"
                isDisabled={loading || !coupon}
                colorScheme="success"
                onPress={() => verify()}>
                {t('Apply Coupon')}
              </Button>
        </HStack>
      <HStack mx={3}>
        {couponDiscount && (

              typeof couponDiscount === 'number' ? <Text mt={3} color={'#4bc02b'}>
                          {t('Congrats for') + ': ' + couponDiscount + '%'}</Text>
                      :
                      <Text mt={3} color={'#cb3e3e'}> {t('Sorry, the entered code is invalid or expired')}</Text>
        )}
      </HStack>
      </Flex>
  );
};
