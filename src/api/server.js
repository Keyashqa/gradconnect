import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3500'  // Match port with json-server
});
