import React from 'react';
import { Box, Checkbox, VStack, FormControl, Input, Button, NativeBaseProvider, Link, Text, Image, Center } from 'native-base';
import { globalStyles } from '../styling/global-styling';
import { View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const logoImage = require("../assets/logo.png");

export default function register({navigation}) {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [showC, setShowC] = React.useState(false);
    const handleClickC = () => setShowC(!showC);
    return (
        <View style={globalStyles.loginView}>
            <NativeBaseProvider>
                <Box p="8">
                    <VStack space="5">
                        <Center px="3">
                            <Image size="xl" resizeMode="contain"
                                source={logoImage}
                                alt="WashApp"
                            />
                        </Center>
                        <FormControl space="3">
                            <Input placeholder="Name" variant="underlined" size="md" />
                        </FormControl>
                        <FormControl space="3">
                            <Input InputLeftElement={
                                <Text color="grey"> +966 </Text>
                            } placeholder="Phone No." variant="underlined" size="md" />
                        </FormControl>
                        <FormControl space="3">
                            <Input type={show ? "text" : "password"} variant="underlined" size="md" placeholder="Password"
                                   InputRightElement={
                                       <Icon onPress={handleClick}
                                             name={show ? "eye" : "eye-slash"} color={show ? "black" : "grey"} size={20}
                                       />}
                            />
                        </FormControl>
                        <FormControl space="3">
                            <Input type={showC ? "text" : "password"} variant="underlined" size="md" placeholder="Confirm Password"
                                   InputRightElement={
                                       <Icon onPress={handleClickC}
                                             name={showC ? "eye" : "eye-slash"} color={showC ? "black" : "grey"} size={20}
                                       />
                                       }
                            />
                        </FormControl>
                        <Checkbox size="sm" value="tnc" mt="10">
                            <Text> I agree to <Link onPress={() =>
                                navigation.navigate('Terms and Conditions')} _text={{color: "blue.400"}} mt={-0.5} href="">Terms and Conditions</Link> </Text>
                        </Checkbox>
                        <Text> <Link _text={{color: "blue.500"}} mt={-0.5} onPress={() =>
                            navigation.navigate('Login')}>Already Have an Account?</Link> </Text>
                    </VStack>
                    <Button mt="2">Register</Button>
                </Box>
            </NativeBaseProvider>
        </View>
    );
}

