import React, {useContext, useState} from 'react';
import {
  Button,
  Center,
  FormControl,
  Input,
  Modal,
  Radio,
  Text,
  Toast,
  VStack,
} from 'native-base';
// import authRequest from '../../utils/auth-request';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import ColorPalette from 'react-native-color-palette';
import {request} from '../../utils/useRequest';
import {AppContext} from '../../utils/AppContext';
// import Form from '../cars/form';

export const CarModal = ({showModal, setShowModal, setCar}) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [color, setColor] = useState(null);
  const [plateNumber, setPlateNumber] = useState(null);
  const {tokenHeader} = useContext(AppContext);

  const submit = () => {
    const data = {
      name: name,
      color: color,
      plate_number: plateNumber,
      car_type_id: type,
    };
    const params = {
      ...tokenHeader,
      ...{
        url: '/cars',
        method: 'post',
        data,
      },
    };
    request(params)
      .then(response => {
        Toast.show({
          description: t('Car Added Successfully'),
          status: 'success',
        });
        setCar(response.data);
      })
      .catch(error => alert(error));
  };

  const {t} = useTranslation();

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>{t('Add new Car')}</Modal.Header>
          <Modal.Body>
            <VStack>
              <Radio.Group
                name="type"
                accessibilityLabel="favorite number"
                value={type}
                onChange={nextValue => {
                  setType(nextValue);
                }}>
                <Radio value="1" my={1}>
                  {t('Family')}
                </Radio>
                <Radio value="2" my={1}>
                  {t('Sedan')}
                </Radio>
              </Radio.Group>

              <FormControl space="3">
                <Input
                  onChangeText={value => setName(value)}
                  value={name}
                  InputLeftElement={
                    <Icon name="car-side" color="grey" size={20} />
                  }
                  placeholder={t('Name')}
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
                  <Text m={3} p={3}>
                    <Icon name="paint-brush" color="grey" size={20} m={3} />
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
                  placeholder={t('Car Number (Optional)')}
                  variant="underlined"
                  size="md"
                />
              </FormControl>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  submit();
                  setShowModal(false);
                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default () => {
  return (
    <Center flex={1} px="3">
      {/*<CarModal />*/}
    </Center>
  );
};
