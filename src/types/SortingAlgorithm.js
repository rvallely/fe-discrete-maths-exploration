import BubbleSortVideo from '../assets/cardboard_work_desks.mp4'

export const SortingAlgorithmType = Object.freeze({
    BUBBLE_SORT: {
        name: 'Bubble Sort',
        description: 'Bubble sort works by looping through each pair of numbers in the list and swapping the position of these numbers if the number to the right is less than the number to the left. It continues iterating under no swap was needed in the entirity of the iteration.',
        video: BubbleSortVideo,
    },
    BUBBLE_SORT_FASTER: {
        name: 'Bubble Sort Faster',
        description: 'An optimised bubble sort, this algorithm works by looping through each pair of numbers in the list and swapping the position of these numbers if the number to the right is less than the number to the left. At the end of each iteration it removes the number in the last index of the list as this is the biggest one and puts it to the start of the sorted list. The iteration and slicing of the biggest element continues until no swaps were needed in an iteration at which point it joins the two lists together.',
        video: BubbleSortVideo,
    },
    INSERTION_SORT: {
        name: 'Insertion Sort',
        description: '',
        video: BubbleSortVideo,
    },
    MERGE_SORT: {
        name: 'Merge Sort',
        description: '',
        video: BubbleSortVideo,
    },
    QUICK_SORT: {
        name: 'Quick Sort',
        description: '',
        video: BubbleSortVideo,
    },
    SELECTION_SORT: {
        name: 'Selection Sort',
        description: '',
        video: BubbleSortVideo,
    },

})
