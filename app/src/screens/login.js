import React, {useState} from 'react';
import {
    Box,
    VStack,
    FormControl,
    Input,
    NativeBaseProvider,
    Image,
    Center,
    Button,
    Text,
    Link,
    Toast,
} from 'native-base';
import {globalStyles} from '../styling/global-styling';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';

const logoImage = require('../assets/logo.png');

export default function login({navigation}) {

    const [cars, setCars] = useState([]);

    const login = () => {

        console.log(phone, password);

        axios.get('https://wash.cm.codes/api/cars', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1|qQMrkEMr6msSbpV3ae4EPzkUGMsUs4xo0E2QRV3j',
            },
        }).then(response => (console.log(response.data) )); //setCars(response.data)


        axios.post('https://wash.cm.codes/api/cars',
            {
                'name': 'Changan CS75 2022',
                'color': 'black',
                'plate_number': 'ABCD 6545',
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1|qQMrkEMr6msSbpV3ae4EPzkUGMsUs4xo0E2QRV3j',
                },
            }).then(response => console.log('new car', response));


        // axios
        //     .post('https://wash.cm.codes/api/login', {
        //             //@todo needs to store url globally
        //             'phone': `${phone}`,
        //             'password': `${password}`,
        //         },
        //         {
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json',
        //             }})
        //     .then(response => {
        //         console.log('hi', response);
        //         if (response.status === 200) {
        //             let data = response.data;
        //
        //             global.token = data.token;
        //             alert('success');
        //             Toast.show({
        //                 text: 'LoginSuccessfully',
        //                 type: 'success',
        //                 duration: 6000,
        //                 navigate: navigation.navigate('Drawer'),
        //                 //textStyle: styles.f
        //             });
        //         } else {
        //             console.log('hello', response);
        //
        //             // this.setState({disabled: false});
        //             // this.setState({submitButtonText: "login"});
        //             alert('fail');
        //             Toast.show({
        //                 text: 'LoginFailed',
        //                 type: 'danger',
        //                 duration: 6000,
        //                 //textStyle: styles.f
        //             });
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //         // this.setState({disabled: false});
        //         // this.setState({submitButtonText: i18n.t("login")});
        //         alert(error);
        //         Toast.show({
        //             text: 'LoginFailed',
        //             type: 'danger',
        //             duration: 6000,
        //             //textStyle: styles.f
        //         });
        //     });
    }
        ;

        const [show, setShow] = useState(false);
        const handleClick = () => setShow(!show);
        const [phone, setPhone] = useState(null);
        // const handleChangePhone = () => setPhone('123456');
        const [password, setPassword] = useState(null);
        // const handleChangePassword = () => setPassword('123456');

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
                                    variant="underlined"
                                    size="md"
                                    placeholder="Phone No."
                                    InputLeftElement={<Text color="grey"> +966 </Text>}
                                    onChangeText={value => setPhone(value)}
                                    value={phone}
                                />
                            </FormControl>
                            <FormControl space="3">
                                <Input
                                    type={show ? 'text' : 'password'}
                                    variant="underlined"
                                    size="md"
                                    placeholder="Password"
                                    InputRightElement={
                                        <Icon
                                            onPress={handleClick}
                                            name={show ? 'eye' : 'eye-slash'}
                                            color={show ? 'black' : 'grey'}
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
                                    onPress={() => navigation.navigate('Register')}>
                                    Join Us Now
                                </Link>{' '}
                            </Text>
                        </VStack>
                        <Button mt="2" onPress={() => login()}>
                            Log-in
                        </Button>
                    </Box>
                </NativeBaseProvider>
            </View>
        );
    };
