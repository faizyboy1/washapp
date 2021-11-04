import React from 'react';
import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  NativeBaseProvider,
  Link,
  Text,
  Image,
  Center,
} from 'native-base';
import {globalStyles} from '../styling/global-styling';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default function addCar({navigation}) {
  return (
    <View style={globalStyles.loginView}>
      <NativeBaseProvider>
        <Box p="8">
          <VStack space="5">
            <FormControl space="3">
              <Input
                InputLeftElement={
                  <Icon name="car-side" color="grey" size={20} />
                }
                placeholder="Name"
                variant="underlined"
                size="md"
              />
            </FormControl>
            <FormControl space="3">
              <Input
                InputLeftElement={
                  <Icon name="paint-brush" color="grey" size={20} />
                }
                placeholder="Car Color"
                variant="underlined"
                size="md"
              />
            </FormControl>
            <FormControl space="3">
              <Input
                InputLeftElement={<Icon name="car" color="grey" size={20} />}
                placeholder="Car Number (Optional)"
                variant="underlined"
                size="md"
              />
            </FormControl>
          </VStack>
          <Button mt="6">Add Car</Button>
        </Box>
      </NativeBaseProvider>
    </View>
  );
}
