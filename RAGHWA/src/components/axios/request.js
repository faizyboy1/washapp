import axios from 'axios';

const request = () => {
  axios.defaults.baseURL = 'https://wash.cm.codes/api';
  axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return axios.create();
};
export default request();
