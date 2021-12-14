import React, {useContext, useEffect, useState} from 'react';

import {
    Box,
    Button, Flex,
    FormControl,
    Input, Radio,
    Text,
    Toast,
    VStack,
} from 'native-base';
import {globalStyles} from '../../assets/style/global-styling';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
// import authRequest from '../../utils/auth-request';
import {useTranslation} from 'react-i18next';
import ColorPalette from 'react-native-color-palette';
import {useRefreshUserDetails, request, useAuthRequest} from '../../utils/useRequest';
import {AppContext} from "../../utils/AppContext";

const colorList = [
    'amber.100',
    'white',
    'black',
    'rose.800',
    'light.400',
    'light.800',
    'blue.900',
    'emerald.700',
];

export default function Form({route, navigation}) {
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [color, setColor] = useState(null);
    const [plateNumber, setPlateNumber] = useState(null);
    const [type, setType] = useState(null);
    const {t} = useTranslation();
    const {tokenHeader, setCar, user, setUser} = useContext(AppContext);

    useEffect(() => {
        const id = route.params?.id;
        if (!id) {
            return;
        }

        const {color, plate_number, name, type} = route.params;

        setEditMode(true);
        setId(id);
        setName(name);
        setColor(color);
        setPlateNumber(plate_number);
        setType(type);
    }, []);


    const Submit = () => {
        const data = {
            name: name,
            color: color,
            plate_number: plateNumber,
            car_type_id: type,
        };


        if (editMode) {
            const params = {
                ...tokenHeader,
                ...{
                    method: 'put',
                    url: `/cars/${id}`,
                    data,
                },
            };

            request(params)
                .then(response => {
                  if (!user.cars?.length) {
                    user.cars = [];
                  }
                  user.cars.push(response.data);
                  setUser(user);

                    Toast.show({
                        description: t('Car Updated Successfully'),
                        status: 'success',
                        duration: 6000,
                        navigate: navigation.navigate('Cars'),
                    });

                })
                .catch(error => alert(error));
            return
        }

        const params = {
            ...tokenHeader,
            ...{
                method: 'post',
                url: `/cars`,
                data,
            },
        };

        request(params)
            .then(response => {
                if (!user.cars?.length) {
                    user.cars = [];
                }
                user.cars.push(response.data);
                setUser(user);

                Toast.show({
                    text: t('Car Added Successfully'),
                    status: 'success',
                    navigate: navigation.navigate('Cars'),
                });
            })
            .catch(error => alert(error));


    };

    return (
        <View style={globalStyles.loginView}>
            <Box p="8">
                <VStack space="5">
                    <Radio.Group
                        name="type"
                        accessibilityLabel="favorite number"
                        value={type}
                        onChange={nextValue => {
                            setType(nextValue);
                        }}>
                        <Flex>
                            <Radio value="1" my={1}>
                                {t('Family')}
                            </Radio>
                            <Radio value="2" my={1}>
                                {t('Sedan')}
                            </Radio>
                        </Flex>
                    </Radio.Group>
                    <FormControl space="3">
                        <Input
                            onChangeText={value => setName(value)}
                            value={name}
                            InputLeftElement={<Icon name="car-side" color="grey" size={20}/>}
                            placeholder="Name"
                            variant="underlined"
                            size="md"
                        />
                    </FormControl>
                    <ColorPalette
                        onChange={color => setColor(color)}
                        defaultColor={'#effbfa'}
                        colors={[
                            '#effbfa',
                            '#C0392B',
                            '#2c7788',
                            '#fff313',
                            '#79858d',
                            '#4bc02b',
                            '#258f82',
                            '#b6aa59',
                            '#8E44AD',
                            '#2980B9',
                        ]}
                        title={
                            <Text>
                                <Icon name="paint-brush" color="grey" size={20} mx={3}/>
                                {t('Color')}
                            </Text>
                        }
                        icon={<Text>✔</Text>}
                    />

                    {/*{colorList.map(color => (*/}
                    {/*  <Circle size={10} bg={color} />*/}
                    {/*))}*/}
                    <FormControl space="3">
                        <Input
                            onChangeText={value => setPlateNumber(value)}
                            value={plateNumber}
                            InputLeftElement={<Icon name="car" color="grey" size={20}/>}
                            placeholder="Car Number (Optional)"
                            variant="underlined"
                            size="md"
                        />
                    </FormControl>
                </VStack>
                <Button mt="6" onPress={() => Submit()}>
                    {editMode ? t('Modify Car') : 'Add Car'}
                </Button>
            </Box>
        </View>
    );
}
