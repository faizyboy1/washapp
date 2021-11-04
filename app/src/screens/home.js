import React from 'react';
import {View, Text, Switch, Button} from 'react-native';
import {globalStyles} from '../styling/global-styling';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useTranslation} from 'react-i18next';

export default function home({navigation}) {
  const {t, i18n} = useTranslation();
  return (
    <View style={globalStyles.loginView}>
      <Text
        style={{textAlign: 'center'}}
        onPress={() => navigation.navigate('ConfirmAddress')}>
        {t('Welcome')}
      </Text>
    </View>
  );
}
