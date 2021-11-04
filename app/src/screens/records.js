import React from 'react';
import {Badge, NativeBaseProvider, HStack, Text} from 'native-base';
import {View} from 'react-native';
import {globalStyles} from '../styling/global-styling';

export default function records() {
  return (
    <View style={globalStyles.termsHeader}>
      <NativeBaseProvider>
        <Badge colorScheme="info" mb={4}>
          SCHEDULED
        </Badge>
        <HStack space={3} alignItems="center">
          <Text w="40"> Every Sunday </Text>
          <Text w="20"> 3:00 pm </Text>
          <Text w="20"> Family Car </Text>
        </HStack>
        <HStack space={3} alignItems="center">
          <Text w="40"> Every Tuesday </Text>
          <Text w="20"> 4:00 pm </Text>
          <Text w="20"> Single Car </Text>
        </HStack>
        <Badge colorScheme="info" mt={8} mb={4}>
          HISTORY
        </Badge>
        <HStack space={3} alignItems="center">
          <Text w="40"> Sep 20, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
        <HStack space={3} alignItems="center">
          <Text w="40"> Sep 01, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 150 SAR </Text>
        </HStack>
        <HStack space={3} alignItems="center">
          <Text w="40"> Aug 28, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
        <HStack space={3} alignItems="center">
          <Text w="40"> Aug 20, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
        <HStack space={3} alignItems="center">
          <Text w="40"> Aug 02, 2021 </Text>
          <Text w="20"> Single Car </Text>
          <Text w="20"> 100 SAR </Text>
        </HStack>
        <HStack space={3} alignItems="center">
          <Text w="40"> July 19, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
        <HStack space={3} alignItems="center">
          <Text w="40"> July 01, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
      </NativeBaseProvider>
    </View>
  );
}
