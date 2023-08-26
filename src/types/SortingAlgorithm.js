import BubbleSortVideo from '../assets/cardboard_work_desks.mp4'

export const SortingAlgorithmType = Object.freeze({
    BUBBLE_SORT: {
        name: 'Bubble Sort',
        description: 'Bubble sort works by looping through each pair of numbers in the list and swapping the position of these numbers if the number to the right is less than the number to the left. It continues iterating under no swap was needed in the entirity of the iteration.',
        video: BubbleSortVideo,
        pathName: 'bubble-sort',
    },
    BUBBLE_SORT_FASTER: {
        name: 'Bubble Sort Faster',
        description: 'An optimised bubble sort, this algorithm works by looping through each pair of numbers in the list and swapping the position of these numbers if the number to the right is less than the number to the left. At the end of each iteration it removes the number in the last index of the list as this is the biggest one and puts it to the start of the sorted list. The iteration and slicing of the biggest element continues until no swaps were needed in an iteration at which point it joins the two lists together.',
        video: BubbleSortVideo,
        pathName: 'bubble-sort-faster',
    },
    INSERTION_SORT: {
        name: 'Insertion Sort',
        description: '',
        video: BubbleSortVideo,
        pathName: 'insertion-sort',
    },
    MERGE_SORT: {
        name: 'Merge Sort',
        description: <div className='lead'>
            <p>Merge sort works by recursively splitting the original list of numbers into two until the resulting lists be divided no more (each list only has one element in it).</p>
            <br></br>
            <p>Then taking two adjacent lists from the current level and it compares the first element of each list, removing the smaller element and placing it at the end of a new merged list. It repeats this comparison again with the two adjacent lists until all elements from the two lists have been placed and sorted into the new merged list.</p>
            <br></br>
            <p>
            The sorting process above is repeated for all the adjacent lists on the current level. When they have all been emptied and sorted into merged lists, we reapeat the sorting on these lists and so on until only one element remains in the list which is the fully sorted list.
            </p>
        </div>,
        video: BubbleSortVideo,
        pathName: 'merge-sort',
    },
    QUICK_SORT: {
        name: 'Quick Sort',
        description: '',
        video: BubbleSortVideo,
        pathName: 'quick-sort',
    },
    SELECTION_SORT: {
        name: 'Selection Sort',
        description: '',
        video: BubbleSortVideo,
        pathName: 'selection-sort',
    },

})
