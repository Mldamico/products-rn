import axios from 'axios';

const cafeApi = axios.create({
  baseURL: 'https://backend-react-native.herokuapp.com/api',
});

export default cafeApi;
