import axios from 'axios';

const discreteMathsServer = axios.create({
    baseURL: 'https://discrete-maths-exploration.herokuapp.com'
});

export const getMsg = () => {
    return discreteMathsServer.get('/').then((data) => {
        //console.log(data.data)
        return data.data.msg;
    });
}

export const getBaseConversion = (value, fromBase, toBase) => {
   // console.log('in utils', value, fromBase, toBase);
    const body = { val: value, fromBase: fromBase, toBase: toBase };
   // console.log('request obj >>', body)
    return discreteMathsServer.post('/base-converter', body).then((data) => {
        console.log(data)
        return data.data.convertedValue;
    });
}