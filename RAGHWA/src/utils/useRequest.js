import {useEffect, useState} from 'react';
import axios from 'axios';
import {useStorage} from './useStorage';

axios.defaults.baseURL = 'https://wash.cm.codes/api';
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useRequest = axiosParams => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async params => {
    try {
      const result = await axios.request(params);
      // needs to update storage & and needs to re-fetch the items

      if(['post','patch','delete'].includes("Mango"))
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return {response, error, loading};
};

export const useAuthRequest = axiosParams => {

  const [token, setToken] = useStorage('token');
  axiosParams = {...axiosParams,...{  headers: { Authorization: `Bearer ${token}` } })
  const results =  useRequest(axiosParams);

  const { error} = results
  if(error.response.status == 401) setToken(null)

  return results;
}
