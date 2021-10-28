import React from 'react';
import { Box, VStack, FormControl, Input, Button, NativeBaseProvider, Text } from 'native-base';
import { globalStyles } from '../styling/global-styling';
import { View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Card, ListItem  } from 'react-native-elements'

export default function register({navigation}) {
    return (
        <View style={globalStyles.loginView}>
            <NativeBaseProvider>
                <Card>
                    <Card.Title>Confirm Your Address please</Card.Title>
                    <Card.Divider/>
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
                    </VStack>
                </Card>
                <Box p="4">
                    <Button>Register</Button>
                </Box>
            </NativeBaseProvider>
        </View>
    );
}

