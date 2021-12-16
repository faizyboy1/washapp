import {Flex, FormControl, HStack, Input, Text, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  RNPaymentSDKLibrary,
  PaymentSDKConfiguration,
  PaymentSDKBillingDetails,
  PaymentSDKTheme,
  PaymentSDKConstants,
  PaymentSDKShippingDetails,
} from '@paytabs/react-native-paytabs';

export default ({amount, navigation}) => {
  const [cardNumbers, setCardNumbers] = useState(4000000000000002);
  const [expiredYear, setExpiredYear] = useState();
  const [expiredMonth, setExpiredMonth] = useState();
  const [holderName, setHolderName] = useState();
  const [cvvs, setCvvs] = useState(123);
  const {t} = useTranslation();
  useEffect(() => {
    return submitCard();
  }, []);
  let name = 'John Smith';
  let email = 'email@test.com';
  let phone = '+2011111111';
  let addressLine = 'address line';
  let city = 'Dubai';
  let state = 'Dubai';
  let countryCode = 'ae';
  let zip = '1234';
  let cardNumber = 4000000000000002;
  let cvv = 123;
  let billingDetails = new PaymentSDKBillingDetails(
    name,
    email,
    phone,
    addressLine,
    city,
    state,
    countryCode, // ISO alpha 2
    zip,
    // cardNumber,
    // cvv,
  );

  // let shippingDetails = new PaymentSDKShippingDetails(name= "John Smith",
  //                                   email= "email@test.com",
  //                                   phone= "+2011111111",
  //                                   addressLine= "address line",
  //                                   city= "Dubai",
  //                                   state= "Dubai",
  //                                   countryCode= "ae", // ISO alpha 2
  //                                   zip= "1234");

  let configuration = new PaymentSDKConfiguration();
  configuration.profileID = '85251';
  configuration.serverKey = 'SLJNBJ6DK6-J29WZWRDRG-MTJDBZLM69';
  configuration.clientKey = 'C6KMP9-9MV26M-PV9VRD-HTVQVV';
  configuration.cartID = '545454';
  configuration.currency = 'AED';
  configuration.cartDescription = 'Flowers';
  configuration.merchantCountryCode = 'ae';
  configuration.merchantName = 'Test';
  configuration.amount = 20;
  configuration.screenTitle = 'Pay with Card';
  configuration.billingDetails = billingDetails;
  // configuration.alternativePaymentMethods = [
  //   PaymentSDKConstants.AlternativePaymentMethod.stcPay,
  // ];
  configuration.forceShippingInfo = false;
  configuration.showBillingInfo = true;
  const submitCard = () => {
    console.log(JSON.stringify(configuration));
    RNPaymentSDKLibrary.startCardPayment(JSON.stringify(configuration)).then(
      result => {
        if (result['PaymentDetails'] != null) {
          // Handle transaction details
          let paymentDetails = result['PaymentDetails'];
          console.log(paymentDetails);
        } else if (result['Event'] == 'CancelPayment') {
          // Handle events
          console.log('Cancel Payment Event');
        }
      },
      function (error) {
        // Handle error
        console.log(error);
      },
    );
  };
  return (
    <>
      <FormControl space="3" mb={2}>
        <Input
          // variant="underlined"

          size="md"
          placeholder={t('Holder Name')}
          onChangeText={value => setHolderName(value)}
          value={holderName}
        />
      </FormControl>
      <FormControl space="3" mb={2}>
        <Input
          // variant="underlined"
          size="md"
          keyboardType={'number-pad'}
          placeholder={t('Card Number')}
          onChangeText={value => setCardNumber(value)}
          value={cardNumber}
        />
      </FormControl>
      <FormControl mb={2} align="center" justify="center">
        <HStack space={3} alignItems={'center'} justifyItems={'center'}>
          <Input
            w={20}
            keyboardType={'number-pad'}
            placeholder={t('CVV')}
            onChangeText={value => setCvv(value)}
            value={cvv}
          />

          <Input
            w={32}
            keyboardType={'number-pad'}
            placeholder={t('Year')}
            onChangeText={value => setExpiredYear(value)}
            value={expiredYear}
          />

          <Input
            // variant="underlined"
            // size="0.5"
            w={32}
            keyboardType={'number-pad'}
            placeholder={t('Month')}
            onChangeText={value => setExpiredMonth(value)}
            value={expiredMonth}
          />
        </HStack>
      </FormControl>
    </>
  );
};
