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
  Text,
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
    <Box px="3">
      {/*<Box h="60%" w="100%" alignItems="center">*/}
      <Popover
        initialFocusRef={initialFocusRef}
        isOpen={isOpen}
        onClose={onClose}
        trigger={triggerProps => {
          return (
            <Button {...triggerProps} onPress={onOpen} colorScheme="info">
              {t('Coupon')}
            </Button>
          );
        }}>
        <Popover.Content w="56">
          <Popover.Arrow />
          <Popover.Header>{t('Apply Coupon')}</Popover.Header>
          <Popover.Body>
            <FormControl>
              <Input
                value={coupon}
                onChangeText={value => setCoupon(value)}
                rounded="sm"
                fontSize="xs"
                backgroundColor="white"
                ref={initialFocusRef}
              />
            </FormControl>
            {couponDiscount && (
              <Text mt={3} color={'#cb3e3e'}>
                {typeof couponDiscount === 'number'
                  ? t('Congrats for') + ': ' + couponDiscount + '%'
                  : 0}
              </Text>
            )}
          </Popover.Body>
          <Popover.Footer justifyContent="flex-end">
            <Button.Group space={2}>
              <Button colorScheme="coolGray" variant="ghost" onPress={onClose}>
                {t('Cancel')}
              </Button>
              <Button
                isDisabled={loading || !coupon}
                colorScheme="success"
                onPress={() => verify()}>
                {t('Apply')}
              </Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
      {/*</Box>*/}
    </Box>
  );
};
