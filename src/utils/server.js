import axios from 'axios';

console.log(process.env.REACT_APP_ENV, '<<< process.env.REACT_APP_ENV');

const discreteMathsServer = axios.create({
    baseURL: process.env.REACT_APP_ENV === 'prod' ? process.env.REACT_APP_SERVER_URL : 'http://localhost:9090/',
    headers: { 'Access-Control-Allow-Origin': '*' }
});

export const getMsg = async () => discreteMathsServer.get('/').then((data) => data.data.msg);

export const getBaseConversion = async (
    value,
    fromBase,
    toBase
) => discreteMathsServer.post('/base-converter', { val: value, fromBase, toBase }).then((data) => data.data);

export const getSortedList = async (
    body,
    sortingAlgorithmPathName
) => discreteMathsServer.post(sortingAlgorithmPathName, body).then((data) => data.data);
