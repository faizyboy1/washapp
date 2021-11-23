import React from 'react';
import {
  extendTheme,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import {View} from 'react-native';
import {globalStyles} from '../../assets/style/global-styling';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Divider from '../../components/divider';

export default function records() {
  const theme = extendTheme();
  return (
    <View style={globalStyles.termsHeader}>
      <HStack space={3} alignItems="center">
        <VStack>
          <Text> Sunday </Text>
          <Text> Oct 24, 2021 </Text>
        </VStack>
        <Text w="20" variant="textRight">
          {' '}
          3:00 pm{' '}
        </Text>
        <Text w="20" variant="textRight">
          {' '}
          Family Car{' '}
        </Text>
        <Icon size={20} name="edit" style={globalStyles.rescheduleIcon} />
        <Icon size={20} name="info" style={globalStyles.rescheduleIcon} />
      </HStack>
      <Divider />
      <HStack space={3} alignItems="center">
        <VStack>
          <Text> Sunday </Text>
          <Text> Oct 24, 2021 </Text>
        </VStack>
        <Text w="20" variant="textRight">
          {' '}
          3:00 pm{' '}
        </Text>
        <Text w="20" variant="textRight">
          {' '}
          Family Car{' '}
        </Text>
        <Icon size={20} name="edit" style={globalStyles.rescheduleIcon} />
        <Icon size={20} name="info" style={globalStyles.rescheduleIcon} />
      </HStack>
      <Divider />
    </View>
  );
}
