import React, {useEffect, useState} from 'react';

import {
  Box,
  Button,
  FormControl,
  Input,
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
import {useAuthRequest} from '../../utils/useRequest';

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
  const {t} = useTranslation();

  useEffect(() => {
    const id = route.params?.id;
    if (!id) {
      return;
    }

    const {color, plate_number, name} = route.params;

    setEditMode(true);
    setId(id);
    setName(name);
    setColor(color);
    setPlateNumber(plate_number);
  }, []);

  const Submit = () => {
    const data = {
      name: name,
      color: color,
      plate_number: plateNumber,
    };

    if (editMode) {
      const {response, error, loading} = useAuthRequest({
        method: 'put',
        url: `/cars/${id}`,
        body: data,
      });

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
    }

    const {response, error, loading} = useAuthRequest({
      method: 'post',
      url: `/cars/${id}`,
      body: data,
    });

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
  };

  return (
    <View style={globalStyles.loginView}>
      <Box p="8">
        <VStack space="5">
          <FormControl space="3">
            <Input
              onChangeText={value => setName(value)}
              value={name}
              InputLeftElement={<Icon name="car-side" color="grey" size={20} />}
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
                <Icon name="paint-brush" color="grey" size={20} mx={3} />
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
              InputLeftElement={<Icon name="car" color="grey" size={20} />}
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
