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
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";

const logoImage = require('../assets/logo.png');

export default function login({navigation}) {

    //token: 6|G2RVoGmeeeOQIsFcwLrO1KHknhh-OTP3q06FCuqqc
    //const [cars, setCars] = useState([]);
    const storage = new MMKVStorage.Loader().withEncryption().initialize();

    const MMKV = new MMKVStorage.Loader().initialize();

    const [token, setToken] = useMMKVStorage("token", MMKV, '6|G2RVoGmeeeOQIsFcwLrO1KHknhh-OTP3q06FCuqqc'); // robert is the default value
    // const carCard = (car) => {
    //     return (
    //     <View>
    //         <Text>{car.name}</Text>
    //         <Text>{car.plate_number}</Text>
    //         <Text>{car.color}</Text>
    //     </View>
    //     )
    // };

    // const createCar = (token) => {
    //     axios.post('https://wash.cm.codes/api/cars',
    //         {
    //             'name': 'Changan CS75 2022',
    //             'color': 'black',
    //             'plate_number': 'ABCD 6545',
    //         },
    //         {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //         }).then(response => console.log('new car', response));
    //
    // };

    const login = () => {
            axios.post('https://wash.cm.codes/api/login', {
                'phone': `966${phone}`, //535010102 //@todo needs to validate phone not contained
                'password': password, //12345678
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                setToken(response.data.token);
                Toast.show({
                    text: 'LoginSuccessfully',
                    type: 'success',
                    duration: 6000,
                    navigate: navigation.navigate('Drawer', {userToken: token}),
                    textStyle: {
                        paddingTop:1,
                        paddingBottom:1,
                        lineHeight:20
                    }
                });
                //carsList(response.data.token)
            }).catch(error => console.log(error)); //setCars(response.data)

        };
    // const carsList = (token) => {
    //     console.log('receiving token:' + token);
    //         axios.get('https://wash.cm.codes/api/cars', {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //         }).then(response => (setCars(response.data) )).catch(error=>console.log(error)); //setCars(response.data)

// return;


            // axios
            //     .post('https://washapp.test/api/login', {
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
    //     }
    // ;

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);

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


                    {/*<View>*/}
                        {/*{cars.map(car =>carCard(car))}*/}
                    {/*</View>*/}
                </Box>
            </NativeBaseProvider>
        </View>
    );
};
