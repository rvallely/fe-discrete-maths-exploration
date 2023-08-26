import axios from 'axios';
import { ENV } from '../env';

const discreteMathsServer = axios.create({
    baseURL: ENV === 'prod' ? 'https://discrete-maths-exploration.herokuapp.com': 'http://localhost:9090/',
    headers: {'Access-Control-Allow-Origin': '*'}
});

export const getMsg = async () => {
    return discreteMathsServer.get('/').then((data) => {
        return data.data.msg;
    });
}

export const getBaseConversion = async (value, fromBase, toBase) => {
    const body = { val: value, fromBase, toBase };
    console.log('making call to ', discreteMathsServer);
    return discreteMathsServer.post('/base-converter', body).then((data) => {
        console.log('data: ', data)
        return data.data;
    });
}

export const getSortedList = async (body, sortingAlgorithmPathName) => {
    return discreteMathsServer.post(`/sorting-algorithms/${sortingAlgorithmPathName}`, body).then((data) => {
        return data.data;
    });
}

