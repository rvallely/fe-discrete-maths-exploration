import axios from 'axios';
import ENV from '../env';

const discreteMathsServer = axios.create({
  baseURL: ENV === 'prod' ? 'https://discrete-maths-exploration.herokuapp.com' : 'http://localhost:9090/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export const getMsg = async () => discreteMathsServer.get('/').then((data) => data.data.msg);

export const getBaseConversion = async (
  value,
  fromBase,
  toBase,
) => discreteMathsServer.post('/base-converter', { val: value, fromBase, toBase }).then((data) => data.data);

export const getSortedList = async (
  body,
  sortingAlgorithmPathName,
) => discreteMathsServer.post(`/sorting-algorithms/${sortingAlgorithmPathName}`, body).then((data) => data.data);
