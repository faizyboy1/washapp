import React from 'react';
import {Pressable} from 'native-base';

export default ({children}) => {
  return (
    <>
      <Pressable
        _focus={{bg: 'secondary.500'}}
        bg="primary.500"
        rounded="md"
        py={2}
        px={3}
        alignSelf="center">
        {children}
      </Pressable>
    </>
  );
};
