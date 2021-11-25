import {Flex, FormControl, HStack, Input, Text} from 'native-base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

export default ({amount, navigation}) => {
  const [cardNumber, setCardNumber] = useState(null);
  const [expiredYear, setExpiredYear] = useState();
  const [expiredMonth, setExpiredMonth] = useState();
  const [holderName, setHolderName] = useState();
  const [cvv, setCvv] = useState();
  const {t} = useTranslation();
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
