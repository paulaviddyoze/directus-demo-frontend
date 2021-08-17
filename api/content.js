import axios from 'axios';

export const pageContent = axios.create({
  baseURL: 'http://localhost:8055/items/',
  responseType: 'json'
});

const getContent = async (type, query) => {
  const path = query ? `${type}/${query}` : type;
  const response = await pageContent.get(path);
  const data = await response;
  return data.data.data;
};

export default getContent;
