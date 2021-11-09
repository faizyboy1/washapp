import React, {useState} from 'react';

import {
    Box,
    VStack,
    FormControl,
    Input,
    Button,
    NativeBaseProvider,
    Toast,
} from 'native-base';
import {globalStyles} from '../assets/style/global-styling';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import axios from "axios";
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";

export default function addCar({navigation}) {

    const MMKV = new MMKVStorage.Loader().initialize();
    const [name, setName] = useState(null);
    const [color, setColor] = useState(null);
    const [plate_number, setPlate_number] = useState(null);
    const [token, setToken] = useMMKVStorage('token', MMKV, '6|G2RVoGmeeeOQIsFcwLrO1KHknhh-OTP3q06FCuqqc');
    const createCar = () => {
        //alert(token);
        axios.post('https://wash.cm.codes/api/cars',
            {
                'name': name,
                'color': color,
                'plate_number': plate_number,
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }).then(response => {
            console.log('new car', response);
            alert(response);
            Toast.show({
                text: 'Car Added Successfully',
                type: 'success',
                duration: 6000,
                navigate: navigation.navigate('Cars'),
                textStyle: {
                    paddingTop: 1,
                    paddingBottom: 1,
                    lineHeight: 20
                }
            })
        }).catch(error=>alert(error));
    };

    return (
        <View style={globalStyles.loginView}>
            <NativeBaseProvider>
                <Box p="8">
                    <VStack space="5">
                        <FormControl space="3">
                            <Input onChangeText={value => setName(value)}
                                   value={name}
                                   InputLeftElement={
                                       <Icon name="car-side" color="grey" size={20} />
                                   }
                                   placeholder="Name"
                                   variant="underlined"
                                   size="md"
                            />
                        </FormControl>
                        <FormControl space="3">
                            <Input onChangeText={value => setColor(value)}
                                   value={color}
                                   InputLeftElement={
                                       <Icon name="paint-brush" color="grey" size={20} />
                                   }
                                   placeholder="Car Color"
                                   variant="underlined"
                                   size="md"
                            />
                        </FormControl>
                        <FormControl space="3">
                            <Input onChangeText={value => setPlate_number(value)}
                                   value={plate_number}
                                   InputLeftElement={<Icon name="car" color="grey" size={20} />}
                                   placeholder="Car Number (Optional)"
                                   variant="underlined"
                                   size="md"
                            />
                        </FormControl>
                    </VStack>
                    <Button mt="6" onPress={() => createCar()}>Add Car</Button>
                </Box>
            </NativeBaseProvider>
        </View>
    );
}
