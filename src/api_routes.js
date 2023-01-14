import axios from 'axios';

const baseURL = 'http://192.168.177.122:5000';

export const login = (credentials) => {
  return axios.post(`${baseURL}/auth/login`, credentials);
};

export const signup = (credentials) => {
  return axios.post(`${baseURL}/auth/register`, credentials)
};

export const getProfile = () => {
  return axios.get(`${baseURL}/profile`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export const ProfileInformation = () => {
  return axios.get(`${baseURL}/`,  {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};
export const Getgstinfo = (Rgstn,email) => {
  return axios.get(`https://api.mastergst.com/public/search/gstin=${Rgstn}&email=${email}`,  {
    headers: {
      client_id: 'e6162233-ede1-4781-ba0b-668763a3e609',
      client_secret:'c586bbba-1adb-49ce-ad4a-f4249dc957a0',
    },
  });
};
