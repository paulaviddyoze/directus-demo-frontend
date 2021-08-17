import axios from 'axios';

export const pageContent = axios.create({
  baseURL: 'http://localhost:8055/users/',
  responseType: 'json'
});

const getUser = async query => {
  const response = await pageContent.get(query);
  const data = await response;
  return data.data.data;
};

export default getUser;
