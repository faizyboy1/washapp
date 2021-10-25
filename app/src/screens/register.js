import React from 'react';
import { Box, Checkbox, VStack, FormControl, Input, Divider, Button, AddIcon, Text, NativeBaseProvider } from 'native-base';
import { globalStyles } from '../styling/global-styling';
import { View } from "react-native";

export default function terms() {
    return (
        <View style={globalStyles.loginView}>
            <NativeBaseProvider>
                <Box p="8">
                    <VStack space="5">
                        <FormControl space="3">
                            <Input placeholder="Phone No." />
                        </FormControl>
                        <FormControl space="3">
                            <Input type="password" variant="underlined" size="md" placeholder="Password"
                            />
                        </FormControl>
                        <Divider />
                        <Checkbox size="sm" value="tnc" justifyContent="center" mb="4">
                            I agree to Terms and Conditions
                        </Checkbox>
                    </VStack>
                    <Button mt="2">Log-in</Button>
                </Box>
            </NativeBaseProvider>
        </View>
    );
}