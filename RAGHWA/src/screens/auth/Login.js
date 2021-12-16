import React, {useContext, useState} from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Image,
  Input,
  Link,
  NativeBaseProvider,
  Text,
  useToast,
  VStack,
} from 'native-base';
import {globalStyles} from '../../assets/style/global-styling';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {AppContext} from '../../utils/AppContext';
import {request} from '../../utils/useRequest';
import {useTranslation} from 'react-i18next';

const logoImage = require('../../assets/images/logo.png');

export default function ({navigation}) {
  const {t} = useTranslation();
  const {FCMToken, setToken, setUser} = useContext(AppContext);
  const toast = useToast();
  // const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    request({
      url: '/login',
      method: 'post',
      data: {
        phone: `966${phone}`, //535010102 //@todo needs to validate phone not contained
        password: password,
        fcm_token: FCMToken,
      },
    })
      .then(response => {
        setToken(response?.data?.token);
        setUser(response.data);
        if (response.data.is_washer) {
          toast.show({
            text: 'LoginSuccessfully',
            type: 'success',
            duration: 6000,
            navigate: navigation.navigate('Washer'),
            textStyle: {
              paddingTop: 1,
              paddingBottom: 1,
              lineHeight: 20,
            },
          });
        } else {
          toast.show({
            text: 'LoginSuccessfully',
            type: 'success',
            duration: 6000,
            navigate: navigation.navigate('Drawer'),
            textStyle: {
              paddingTop: 1,
              paddingBottom: 1,
              lineHeight: 20,
            },
          });
        }
      })
      .catch(error => {
        console.log(error.message);
        toast.show({
          status: 'error',
          description: error.response?.data?.message ?? t('Error'),
          title: t('Something went wrong'),
        });
      });
    setLoading(false);
  };

  return (
    <View style={globalStyles.loginView}>
      <NativeBaseProvider>
        <Box p="8">
          <VStack space="12">
            <Center px="3">
              <Image
                size="xl"
                resizeMode="contain"
                source={logoImage}
                alt="WashApp"
              />
            </Center>
            <FormControl space="3">
              <Input
                // variant="underlined"
                size="md"
                placeholder={t('Phone No')}
                InputRightElement={<Text color="grey"> +966 (0)</Text>}
                onChangeText={value => setPhone(value)}
                value={phone}
              />
            </FormControl>
            <FormControl space="3">
              <Input
                type={show ? 'text' : 'password'}
                // variant="underlined"
                size="md"
                placeholder={t('Password')}
                InputLeftElement={
                  <Icon
                    style={{marginLeft: 5}}
                    onPress={handleClick}
                    name={show ? 'eye' : 'eye-slash'}
                    color={'#258f82'}
                    size={20}
                  />
                }
                onChangeText={value => setPassword(value)}
                value={password}
              />
            </FormControl>
            <Text>
              {' '}
              <Link
                _text={{color: 'blue.500'}}
                mt={-0.5}
                onPress={() => navigation.navigate('register')}>
                {t('Join Us Now')}
              </Link>{' '}
            </Text>
          </VStack>
          <Button
            mt="2"
            isDisabled={!password || !phone || loading}
            onPress={() => login()}>
            {t('Login')}
          </Button>
        </Box>
      </NativeBaseProvider>
    </View>
  );
}
