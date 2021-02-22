import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_GATEWAY}`,
  headers: {},
});

export default client;
