import React from 'react';
import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  NativeBaseProvider,
  Text,
  Link,
  Checkbox,
} from 'native-base';
import {globalStyles} from '../styling/global-styling';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Radio from 'native-base/src/components/primitives/Radio/Radio.web';

export default function confirmAddress({navigation}) {
  return (
    <View style={globalStyles.loginView}>
      <NativeBaseProvider>
        <Box p="8">
          <VStack space="5">
            <FormControl space="3">
              <Input
                InputLeftElement={
                  <Icon name="location-arrow" color="grey" size={20} />
                }
                placeholder="Address Title"
                variant="underlined"
                size="md"
              />
            </FormControl>
          </VStack>
          <Button mt="4">Save Address</Button>
        </Box>
      </NativeBaseProvider>
    </View>
  );
}
