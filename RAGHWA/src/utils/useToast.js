import {useToast} from 'native-base';

export default (description = null, status = 'info', title = null) => {
  const usingToast = useToast();

  usingToast.show({status, description, title});
};
