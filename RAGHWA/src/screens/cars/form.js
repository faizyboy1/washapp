import React, {useEffect, useState} from 'react';

import {Box, Button, FormControl, Input, NativeBaseProvider, Toast, VStack,} from 'native-base';
import {globalStyles} from '../../assets/style/global-styling';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import authRequest from "../../components/axios/auth-request";

export default function form({route, navigation}) {
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [color, setColor] = useState(null);
    const [plateNumber, setPlateNumber] = useState(null);

    useEffect(() => {
        console.log(route);
      const  id = route.params?.id
      if(!id) return;

        const {color, plate_number, name} = route.params;

            setEditMode(true)
            setId(id)
            setName(name)
            setColor(color)
            setPlateNumber(plate_number)

    }, [])


    const submit = () => {

        const data = {
            name: name,
            color: color,
            plate_number: plateNumber,
        };

        if (editMode) {
            authRequest.patch(`/cars/${id}`, data).then(response => {
              console.log('updating car', response);
              alert(response);
              Toast.show({
                text: 'Car Updated Successfully',
                type: 'success',
                duration: 6000,
                navigate: navigation.navigate('Cars'),
                textStyle: {
                  paddingTop: 1,
                  paddingBottom: 1,
                  lineHeight: 20,
                },
              });
            })
                .catch(error => alert(error));
            return true;

        }

        authRequest.post(`/cars`, data).then(response => {
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
              lineHeight: 20,
            },
          });
        })
            .catch(error => alert(error));


    }


    return (
        <View style={globalStyles.loginView}>
            <NativeBaseProvider>
                <Box p="8">
                    <VStack space="5">
                        <FormControl space="3">
                            <Input
                                onChangeText={value => setName(value)}
                                value={name}
                                InputLeftElement={
                                    <Icon name="car-side" color="grey" size={20}/>
                                }
                                placeholder="Name"
                                variant="underlined"
                                size="md"
                            />
                        </FormControl>
                        <FormControl space="3">
                            <Input
                                onChangeText={value => setColor(value)}
                                value={color}
                                InputLeftElement={
                                    <Icon name="paint-brush" color="grey" size={20}/>
                                }
                                placeholder="Car Color"
                                variant="underlined"
                                size="md"
                            />
                        </FormControl>
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
                    <Button mt="6" onPress={() => submit()}>
                      {editMode?'Modify Car':'Add Car'}
                    </Button>
                </Box>
            </NativeBaseProvider>
        </View>
    );
}
