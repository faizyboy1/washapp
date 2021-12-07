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
import {globalStyles} from '../../assets/style/global-styling';

export default ({booking, route}) => {

    const {t} = useTranslation();
    const {isOpen, onOpen, onClose} = useDisclose();
    const initialFocusRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const {user:customer,car} = useContext(AppContext);


    return (
        <>
            <VStack w="40">
                <Text style={globalStyles.termSectionTitle}>{t('Customer Details')}</Text>
                <Text style={globalStyles.textAlignment}> {customer.name} </Text>
                <Text style={globalStyles.textAlignment}> {customer.phone} </Text>
            </VStack>

            <VStack w="40">
                <Text style={globalStyles.termSectionTitle}>t('Car Details')</Text>
                <Text style={globalStyles.textAlignment}> {car.name} </Text>
                <Text style={globalStyles.textAlignment}> {car.color} </Text>
                <Text style={globalStyles.textAlignment}> {car.plate_number} </Text>
            </VStack>

            <VStack w="40">
                <Text style={globalStyles.termSectionTitle}>t('Services')</Text>
                <Text style={globalStyles.textAlignment}> {service.name} </Text>
                <Text style={globalStyles.textAlignment}> {service.price} </Text>
                <Text style={globalStyles.textAlignment}> {car.plate_number} </Text>
            </VStack>
            <Divider my="2" />
            <HStack space={4} alignItems="center">
                <Button
                    borderColor={'primary.200'}
                    borderWidth={2}
                    mt={1}
                    onPress={onOpen}>
                    {t('Confirm')}
                </Button>
                <Button
                    borderColor={'primary.200'}
                    borderWidth={2}
                    mt={1}
                    onPress={onOpen}>
                    {t('Completed')}
                </Button>
                <Button
                    borderColor={'danger.200'}
                    borderWidth={2}
                    mt={1}
                    onPress={onOpen}>
                    {t('Cancel')}
                </Button>
            </HStack>
        </>
    );
};
