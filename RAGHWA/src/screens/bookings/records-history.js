import React from 'react';
import {HStack, NativeBaseProvider, Text} from 'native-base';
import {View} from 'react-native';
import {globalStyles} from '../../assets/style/global-styling';
import Divider from '../../components/divider';

export default function records() {
  return (
    <View style={globalStyles.termsHeader}>
      <NativeBaseProvider>
        <HStack space={3} alignItems="center">
          <Text w="40"> Sep 20, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
        <Divider />
        <HStack space={3} alignItems="center">
          <Text w="40"> Sep 01, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 150 SAR </Text>
        </HStack>
        <Divider />
        <HStack space={3} alignItems="center">
          <Text w="40"> Aug 28, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
        <Divider />
        <HStack space={3} alignItems="center">
          <Text w="40"> Aug 20, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
        <Divider />
        <HStack space={3} alignItems="center">
          <Text w="40"> Aug 02, 2021 </Text>
          <Text w="20"> Single Car </Text>
          <Text w="20"> 100 SAR </Text>
        </HStack>
        <Divider />
        <HStack space={3} alignItems="center">
          <Text w="40"> July 19, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
        <Divider />
        <HStack space={3} alignItems="center">
          <Text w="40"> July 01, 2021 </Text>
          <Text w="20"> Family Car </Text>
          <Text w="20"> 200 SAR </Text>
        </HStack>
      </NativeBaseProvider>
    </View>
  );
}
