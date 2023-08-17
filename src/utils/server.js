import axios from 'axios';

const discreteMathsServer = axios.create({
    baseURL: process.env === 'prod' ? 'https://discrete-maths-exploration.herokuapp.com': 'http://localhost:9090/',
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

export const getSortedListUsingInsertionSort = async (unorderedNumberList) => {
    return {
        sortedNumberList: String(unorderedNumberList.replace(' ', '').split(',').map(num => Number(num)).sort((a, b) => a - b)).replace(/,/g, ', '),
        sortingSteps: [
            { iteration: [2, 7, 8, 10], swapNeeded: true},
            { iteration: [2, 7, 8, 10], swapNeeded: false}
        ],
        timeTaken: '0.25',
    }
}

export const getSortedListUsingQuickSort = async (unorderedNumberList) => {
    return {
        sortedNumberList: String(unorderedNumberList.replace(' ', '').split(',').map(num => Number(num)).sort((a, b) => a - b)).replace(/,/g, ', '),
        sortingSteps: [
            { iteration: [2, 7, 8, 10], swapNeeded: true},
            { iteration: [2, 7, 8, 10], swapNeeded: false}
        ],
        timeTaken: '0.25',
    }
}

export const getSortedListUsingSelectionSort = async (unorderedNumberList) => {
    return {
        sortedNumberList: String(unorderedNumberList.replace(' ', '').split(',').map(num => Number(num)).sort((a, b) => a - b)).replace(/,/g, ', '),
        sortingSteps: [
            { iteration: [2, 7, 8, 10], swapNeeded: true},
            { iteration: [2, 7, 8, 10], swapNeeded: false}
        ],
        timeTaken: '0.25',
    }
}


