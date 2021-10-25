import React from 'react';
import { Box, VStack, FormControl, Input, Divider, Button, NativeBaseProvider, ArrowBackIcon } from 'native-base';
import { globalStyles } from '../styling/global-styling';
import { View } from "react-native";


export default function terms() {
    return (
        <View style={globalStyles.loginView}>
            <NativeBaseProvider>
                <Box p="8">
                    <VStack space="12">
                        <FormControl space="3">
                            <Input variant="underlined" size="md" placeholder="Phone No."
                                   InputLeftElement={
                                       <ArrowBackIcon
                                           size={5}
                                           ml="2"
                                           color="muted.400"
                                       />
                                   }
                            />
                        </FormControl>
                        <Divider />
                    </VStack>
                    <Button mt="2">Generate OTP Code</Button>
                </Box>
            </NativeBaseProvider>
        </View>
    );
}