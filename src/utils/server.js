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

export const getSortedListUsingBubbleSort = async (unsortedList) => {
    return discreteMathsServer.post('/sorting-algorithms/bubble-sort', { unsortedList }).then((data) => {
        return data.data;
    });
}

export const getSortedListUsingBubbleSortFaster = async (unsortedList) => {
    return discreteMathsServer.post('/sorting-algorithms/bubble-sort-faster', { unsortedList }).then((data) => {
        return data.data;
    });
}

export const getSortedListUsingMergeSort = async (unsortedList) => {
    return discreteMathsServer.post('/sorting-algorithms/merge-sort', { unsortedList }).then((data) => {
        return data.data;
    });
}

export const getSortedListUsingInsertionSort = async (unsortedList) => {
    return discreteMathsServer.post('/sorting-algorithms/insertion-sort', { unsortedList }).then((data) => {
        return data.data;
    });
}

export const getSortedListUsingQuickSort = async (unsortedList) => {
    return discreteMathsServer.post('/sorting-algorithms/quick-sort', { unsortedList }).then((data) => {
        return data.data;
    });
}

export const getSortedListUsingSelectionSort = async (unsortedList) => {
    return discreteMathsServer.post('/sorting-algorithms/selection-sort', { unsortedList }).then((data) => {
        console.log(data.data, '<<< returned api data')
        return data.data;
    });
}


