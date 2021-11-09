import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../assets/style/global-styling';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { useTranslation } from 'react-i18next';
import { MMKV } from 'react-native-mmkv';

export default function home({navigation}) {
    const storage = new MMKV();
    const token = storage.getString('token');
    const {t} = useTranslation();
    return (
        <View style={globalStyles.loginView}>
            <Text
                style={{textAlign: 'center'}}
                onPress={() => navigation.navigate('ConfirmAddress')}>
                {t('Welcome')}
                {token}
            </Text>
        </View>
    );
}
