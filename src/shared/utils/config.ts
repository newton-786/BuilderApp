// @ts-ignore
import axios, {AxiosInstance} from 'axios';
import {store} from '../redux/store';

import {BASE_URL} from './endpoints';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL
});
const GOOGLE_MAP_API_KEY = 'AIzaSyCXhCd0sMWvXdHPsMBldiVXsRRzggucePU';
// const GOOGLE_MAP_API_KEY = 'AIzaSyDYWzcvDA-25JOVvYXSt8FeaSNwxU4h8Vs';

const initialConfig = () => {
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const {authToken} = store.getState().root.user;

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );



};

export {
  HTTP_CLIENT,
  setupAxios,
  initialConfig,
  GOOGLE_MAP_API_KEY,

};
