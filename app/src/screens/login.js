import React from 'react';
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
    Link
} from 'native-base';
import { globalStyles } from '../styling/global-styling';
import { View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const logoImage = require("../assets/logo.png");

export default function login({navigation}) {

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <View style={globalStyles.loginView}>
            <NativeBaseProvider>
                <Box p="8">
                    <VStack space="12">
                        <Center px="3">
                            <Image
                                source={logoImage}
                                alt="WashApp"
                            />
                        </Center>
                        <FormControl space="3">
                            <Input variant="underlined" size="md" placeholder="Phone No."
                                   InputLeftElement={
                                       <Text color="grey"> +966 </Text>
                                   }
                            />
                        </FormControl>
                        <FormControl space="3">
                            <Input type={show ? "text" : "password"} variant="underlined" size="md" placeholder="Password"
                                       InputRightElement={
                                       <Icon onPress={handleClick}
                                           name="eye-slash" color="grey" size={20}
                                       />}
                            />
                        </FormControl>
                        <Text> <Link _text={{color: "blue.400"}} mt={-0.5} onPress={() =>
                            navigation.navigate('Register')}>Join Us Now</Link> </Text>
                    </VStack>
                    <Button mt="2">Log-in</Button>
                </Box>
            </NativeBaseProvider>
        </View>
    );
}