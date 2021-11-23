import {useContext, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {useStorage} from './useStorage';
import {useNavigation} from '@react-navigation/native';
import {fetch} from 'react-native/Libraries/Network/fetch';
import {AppContext} from './AppContext';
import React from 'react';

axios.defaults.baseURL = 'https://wash.cm.codes/api';

axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const useRequest = (axiosParams = null) => {
  const [response, setResponse] = useState(undefined);
  const [params, setParams] = useState(axiosParams);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const [params, setParams] = useState(axiosParams);

  const fetchData = async parameters => {
    try {
      const result = await axios.request(parameters);
      // needs to update storage & and needs to re-fetch the items

      setResponse(result.data);
      // if (['post', 'put', 'delete'].includes(parameters.method)) {
      //   FetchUserDetails();
      // }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params?.url) {
      setLoading(true);
      fetchData(params);
    }
  }, [params]);

  return {response, error, loading, setParams};
};

export const useAuthRequest = axiosParams => {
  const {token} = useContext(AppContext);
  const navigation = useNavigation();

  axiosParams = {
    ...axiosParams,
    ...{headers: {Authorization: `Bearer ${token}`}},
  };
  const results = useRequest(axiosParams);

  // const {error} = results;
  // if (error.response?.status == 401) {
  //   console.log('auto-logout');
  //   setToken(null);
  //   navigation.navigate('Login');
  // }

  return results;
};

export const FetchUserDetails = () => {
  // const [user, setUser] = useStorage('user');
  // const {response} = useAuthRequest({url: '/user'});
  // setUser(response);
};

export const request = params => {
  return axios.request(params);
};

// export const authRequest = () => {
//
//   return axios.create({headers: {Authorization: `Bearer ${token}`}});
// };

// export const useLazyRequest = () => {
//   const [response, setResponse] = useState(undefined);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//
//   const sendRequest = axiosParams => {
//     setLoading(true);
//
//     axios(axiosParams)
//       .then(response => {
//         setLoading(false);
//         setResponse(response.data);
//       })
//       .catch(err => {
//         setLoading(false);
//         setError(err);
//       });
//   };
//
//   return {loading, error, response, sendRequest};
// };

// export const useLazyAuthRequest = () => {
//   const sendRequest = axiosParams => {
//     return useAuthRequest(axiosParams);
//   };
//
//   return {sendRequest};
// };

// export const useAuthAxios = () => {
//   const [token, setToken] = useStorage('token');
//
//   return axios.create({headers: {Authorization: `Bearer ${token}`}});
// };
//
// export const useAxios = async (axiosParams = null) => {
//   const [response, setResponse] = useState(undefined);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!axiosParams?.url) {
//         setLoading(false);
//         return 'No url was provided';
//       }
//
//       try {
//         const result = await axios.request(axiosParams);
//         // needs to update storage & and needs to re-fetch the items
//
//         setResponse(result.data);
//         // if (['post', 'put', 'delete'].includes(parameters.method)) {
//         //   FetchUserDetails();
//         // }
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
//
//   return {response, error, loading};
// };
