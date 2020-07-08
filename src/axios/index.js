import axios from 'axios';

export default axios.create({
  baseURL: 'https://vt-json-server.herokuapp.com',
});
