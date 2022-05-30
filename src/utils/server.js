import axios from 'axios';

const discreteMathsServer = axios.create({
    baseURL: 'https://discrete-maths-exploration.herokuapp.com'
});

export const getMsg = () => {
    return discreteMathsServer.get('/').then((data) => {
        return data.data.msg;
    });
}

export const getBaseConversion = (value, fromBase, toBase) => {
    const body = { val: value, fromBase: fromBase, toBase: toBase };
    return discreteMathsServer.post('/base-converter', body).then((data) => {
        return data.data;
    });
}