import React from 'react';
import { Box, Checkbox, VStack, FormControl, Input, Button, NativeBaseProvider, Link, Text, Image, Center } from 'native-base';
import { globalStyles } from '../styling/global-styling';
import { View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function register({navigation}) {
    return (
        <View style={globalStyles.loginView}>
            <NativeBaseProvider>
                <Box p="8">
                    <VStack space="5">
                        <FormControl space="3">
                            <Input InputLeftElement={
                                <Icon
                                    name="user" color="grey" size={20}
                                />
                            } placeholder="Name" variant="underlined" size="md" />
                        </FormControl>
                        <FormControl space="3">
                            <Input InputLeftElement={
                                <Text color="grey"> +966 </Text>
                            } placeholder="Phone No." variant="underlined" size="md" />
                        </FormControl>
                        <Checkbox size="sm" value="tnc" mt="10">
                            <Text> I agree to <Link onPress={() =>
                                navigation.navigate('Terms and Conditions')} _text={{color: "blue.400"}} mt={-0.5} href="">Terms and Conditions</Link> </Text>
                        </Checkbox>
                        <Text> <Link _text={{color: "blue.400"}} mt={-0.5} onPress={() =>
                            navigation.navigate('Login')}>Already Have an Account?</Link> </Text>
                    </VStack>
                    <Button mt="2">Register</Button>
                </Box>
            </NativeBaseProvider>
        </View>
    );
}

