import {FormControl, Input, Text} from 'native-base';
import React, {useState} from 'react';

export default ({amount}) => {
  const [cardNumber, setCardNumber] = useState(null);
  const [expireDate, setExpireDate] = useState();
  const [holderName, setHolderName] = useState();
  const [cvv, setCvv] = useState();
  return (
    <>
      <FormControl space="3">
        <Input
          // variant="underlined"
          size="md"
          placeholder={t('Card Number')}
          InputRightElement={<Text color="grey"> +966 </Text>}
          onChangeText={value => setPhone(value)}
          value={phone}
        />
      </FormControl>
    </>
  );
};
