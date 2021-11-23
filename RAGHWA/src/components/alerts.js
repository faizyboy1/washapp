// import {
//     Button,
//     useToast,
//     VStack,
//     Center,
//     NativeBaseProvider,
// } from "native-base"
//
// export const success = () => {
// toast('success',)
//
// }
//
// export const errorAlert = (message='Error!! ',title='Something went wrong\n') => {
//
//
// }

import {useToast} from 'native-base';

export default (status, description = null, title = null) => {
  const usingToast = useToast();

  usingToast.show({status, description, title});
};
