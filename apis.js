import axios from './plugins/axios';

function login(params) {
  return axios.post('/elm/user/login', params);
}

function sendCode(params) {
  return axios.post('/elm/sendCode', params);
}

function getStores(params) {
  return axios.get('/elm/store/getStore', params);
}

function getStoreById(params) {
  return axios.get('/elm/store/'+params);
}

export {
  login,
  sendCode,
  getStores,
  getStoreById,
}