import React, {useState} from 'react';
import axios from 'axios';

const AppContext = React.createContext('');

const AppProvider = props => {
  let hostName = 'http://127.0.0.1:8000';

  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState('');
  const [userNameInput, setUserNameInput] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleUserNameInput(changeEvent) {
    let updatedUserName = changeEvent.target.value;
    setUserNameInput(updatedUserName);
  }

  function handleUserPhone(changeEvent) {
    let updatedUserPhone = changeEvent.target.value;
    setUserPhone(updatedUserPhone);
  }

  const login = () => {
    alert('hello');
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios.get(hostName + 'sanctum/csrf-cookie').then(
      response => {
        //console.log(response);
        // LOGIN
        axios
          .post(hostName + 'api/login', {
            phone: userPhone,
            password: userPassword,
          })
          .then(
            response => {
              alert(response);
              // GET USER
              axios.get(hostName + 'api/user').then(
                response => {
                  //console.log(response);
                  setUserId(response.data.id);
                  setUserName(response.data.name);
                  setErrorMessage('');
                  //setAuthStatus(LOGGED_IN)
                },
                // GET USER ERROR
                error => {
                  alert('Could not complete the login');
                },
              );
            },
            // LOGIN ERROR
            error => {
              if (error.response) {
                alert(error.response.data.message);
              } else {
                alert('Could not complete the login');
              }
            },
          );
      },
      // COOKIE ERROR
      error => {
        alert('Could not complete the login');
      },
    );
  };
  return (
    <AppContext.Provider
      value={{
        userId,
        userName,
        userNameInput,
        userPhone,
        userPassword,
        handleUserPhone,
        handleUserPassword,
        login,
        errorMessage,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
