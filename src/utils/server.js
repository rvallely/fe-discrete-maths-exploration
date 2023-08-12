import axios from 'axios';

const discreteMathsServer = axios.create({
    baseURL: 'https://discrete-maths-exploration.herokuapp.com'
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
        return data.data;
    });
}

export const getSortedListUsingBubbleSort = async (unorderedNumberList) => {
    return {
        sortedNumberList: String(unorderedNumberList.sort((a, b) => a - b)).replace(/,/g, ', '),
        sortingSteps: [
            { iteration: [2, 7, 8, 10], swapNeeded: true},
            { iteration: [2, 7, 8, 10], swapNeeded: false}
        ],
        timeTaken: '0.25',
    }
        // return discreteMathsServer.post('/sorting-algorithms/bubble-sort', body).then((data) => {
    //     return data.data;
    // });
}

export const getSortedListUsingBubbleSortFaster = async (unorderedNumberList) => {
    return {
        sortedNumberList: String(unorderedNumberList.replace(' ', '').split(',').map(num => Number(num)).sort((a, b) => a - b)).replace(/,/g, ', '),
        sortingSteps: [
            { iteration: [2, 7, 8, 10], swapNeeded: true},
            { iteration: [2, 7, 8, 10], swapNeeded: false}
        ],
        timeTaken: '0.25',
    }
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

export const getSortedListUsingMergeSort = async (unorderedNumberList) => {
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


