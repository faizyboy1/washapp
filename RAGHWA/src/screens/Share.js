import React from 'react';
import {Share} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Button, Center, Text} from 'native-base';
import {useTranslation} from "react-i18next";

const share = () => {
  const {t} = useTranslation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: t('Raghwa is your best choice to clean your car!'),
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
      <Center alignItems={'center'} flex={1} px="3">
      <Text fontSize={'lg'}>
          {t('Your Friends Deserve The best, Share our App with them!')}
      </Text>
          <Button
              size={'lg'}
              width={40}
              p={2}
              m={5}
              leftIcon={<Icon name="plus" type="Ionicons" color="white" />}
              onPress={onShare}>
              {t('Share the App')}
          </Button>
      </Center>
  );
};

export default share;
