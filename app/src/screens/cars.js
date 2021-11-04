import React from 'react';
import {NativeBaseProvider, HStack, Image, VStack, Button} from 'native-base';
import {View, Text} from 'react-native';
import {globalStyles} from '../styling/global-styling';
import Divider from '../components/divider';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default function cars() {
  return (
    <View style={globalStyles.termsHeader}>
      <NativeBaseProvider>
        <HStack space={4} alignItems="center">
          <Icon size={60} name="car-side" style={{color: 'blue'}} />
          <VStack w="40">
            <Text style={globalStyles.textAlignment}> Mahmood Lexus </Text>
            <Text style={globalStyles.textAlignment}> 0602 </Text>
          </VStack>
          <Icon size={20} name="edit" style={globalStyles.rescheduleIcon} />
          <Icon size={20} name="trash" style={globalStyles.rescheduleIcon} />
        </HStack>
        <Divider />
        <HStack space={4} alignItems="center">
          <Icon size={60} name="car-side" style={{color: 'green'}} />
          <VStack w="40">
            <Text style={globalStyles.textAlignment}> Yousif Honda </Text>
            <Text style={globalStyles.textAlignment}> 23452 </Text>
          </VStack>
          <Icon size={20} name="edit" style={globalStyles.rescheduleIcon} />
          <Icon size={20} name="trash" style={globalStyles.rescheduleIcon} />
        </HStack>
        <Divider />
        <HStack space={4} alignItems="center">
          <Icon size={60} name="car-side" style={{color: 'red'}} />
          <VStack w="40">
            <Text style={globalStyles.textAlignment}> Mohammed Kia </Text>
            <Text style={globalStyles.textAlignment}> 201195 </Text>
          </VStack>
          <Icon size={20} name="edit" style={globalStyles.rescheduleIcon} />
          <Icon size={20} name="trash" style={globalStyles.rescheduleIcon} />
        </HStack>
        <Divider />
        <HStack space={4} alignItems="center">
          <Icon size={60} name="car-side" style={{color: 'black'}} />
          <VStack w="40">
            <Text style={globalStyles.textAlignment}> Ahmed Accord </Text>
            <Text style={globalStyles.textAlignment}> 77674 </Text>
          </VStack>
          <Icon size={20} name="edit" style={globalStyles.rescheduleIcon} />
          <Icon size={20} name="trash" style={globalStyles.rescheduleIcon} />
        </HStack>
      </NativeBaseProvider>
    </View>
  );
}
