import axios from 'axios';
import MMKVStorage from 'react-native-mmkv-storage';

const authRequest = () => {
  const MMKV = new MMKVStorage.Loader().initialize();
  const token = MMKV.getString('token');
  axios.defaults.baseURL = 'https://wash.cm.codes/api';
  axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  return axios.create();
};
export default authRequest();
