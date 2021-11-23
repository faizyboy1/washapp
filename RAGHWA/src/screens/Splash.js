import {Image, Text, View} from 'native-base';
import {useTranslation} from 'react-i18next';
import React from 'react';

export default () => {
  const {t} = useTranslation();
  return (
    <View>
      <Image
        source={require('../assets/images/logo-white.png')}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <Text>{t('Splash')}</Text>
    </View>
  );
};
