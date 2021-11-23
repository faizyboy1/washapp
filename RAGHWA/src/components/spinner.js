import {Center, Spinner, VStack} from 'native-base';
import React from 'react';

export default () => {
  return (
    <VStack
      direction="row"
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      w="100%"
      _contentContainerStyle={{
        // px: '20px',
        // mb: '4',
        // minW: '72',
        w: 'full',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Center
        mt="3"
        mb="4"
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Spinner
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          color="cyan.500"
        />
      </Center>
    </VStack>
  );
};
