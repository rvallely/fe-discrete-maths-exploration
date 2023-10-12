const PATHS = Object.freeze({
    Home: {
        mainPath: '/home'
    },
    WhatIsDiscreteMaths: {
        mainPath: '/what-is-discrete-maths'
    },
    NumberBases: {
        mainPath: '/number-bases',
        subPaths: {
            primer: '/number-bases/primer',
            'Real World Uses': '/number-bases/real-world-uses',
            'Base Converter': '/number-bases/base-converter'
        }
    },
    SortingAlgorithms: {
        mainPath: '/sorting-algorithms',
        subPaths: {
            SortingAlgorithmBubbleSort: '/sorting-algorithms/bubble-sort',
            SortingAlgorithmBubbleSortFaster: '/sorting-algorithms/bubble-sort-faster',
            SortingAlgorithmInsertionSort: '/sorting-algorithms/insertion-sort',
            SortingAlgorithmSelectionSort: '/sorting-algorithms/selection-sort',
            SortingAlgorithmQuickSort: '/sorting-algorithms/quick-sort',
            SortingAlgorithmMergeSort: '/sorting-algorithms/merge-sort'
        }
    },
    SummationCalculator: '/summation-calculator',
    PermutationsAndCombinations: '/permutations-and-combinations'
});

export default PATHS;
