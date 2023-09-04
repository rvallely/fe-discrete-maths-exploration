/* eslint-disable max-len */
import React from 'react';
import BubbleSortVideo from '../assets/cardboard_work_desks.mp4';

const SortingAlgorithmType = Object.freeze({
  BUBBLE_SORT: {
    name: 'Bubble Sort',
    description:
  <div className="lead">
    <p>
      This sorting algorithm works by looking at each two consecutive values in the list, beginning with the values at indices 0 and 1. The values are swapped if they are out of order (left value is bigger than the right value). This process is then repeated with the two consecutive values at indices 1 and 2 in the next stage, 2 and 3 in the stage after that and so on until the end of the list is reached.
    </p>
    <br />
    <p> If a swap was needed in an iteration of the list, the process begins again from comparing the values at indices 0 and 1. Bubble sort continues iterating in this way until no swap was needed in the entirity of an iteration of the list. At this point the list has been sorted into ascending order. If we take N as the number of values in the list, Bubble Sort has an O(N²) time complexity and is considered to be a relatively inefficient algorithm, since as the number of values in the list increases, the steps needed to complete sorting increase dramatically.</p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'bubble-sort',
  },
  BUBBLE_SORT_FASTER: {
    name: 'Bubble Sort Faster',
    description:
  <div className="lead">
    <p>
      Bubble Sort Faster is an optimised Bubble Sort. This sorting algorithm works by looping through each pair of consecutive values in the list (inputList) and swapping them if the left value is bigger than the right value. At the end of each list iteration the value at the last index of inputList is removed and put at the start of another array (sortedList). The value that has been added to sortedList is the largest value in the current form of inputList.
    </p>
    <br />
    <p>
      Looping through consecutive values and slicing of the largest value continues until no swaps were needed in an iteration of the current form of inputList. At this point what is left of inputList has been sorted and is joined to the start of sortedList to form one ascendingly ordered sorted list.
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'bubble-sort-faster',
  },
  SELECTION_SORT: {
    name: 'Selection Sort',
    description:
  <div className="lead">
    <p>
      Selection Sort begins with index 0 of the list and assigns this as the index with the lowest value element (lowestValueIndex). It loops through the remaining elements, comparing their value to the element at lowestValueIndex and reassigning lowestValueIndex if a smaller value is found. At the end of the list iteration, if the lowestValueIndex is not 0, the element at index 0 and the element at lowestValueIndex are swapped. Now the iteration begins at index 1, taking this as lowestValueIndex and repeating the above steps.
    </p>
    <br />
    <p>
      The index from which the iteration begins is incremented by 1 each list iteration, until the start index is the last index of the list, at which point the list has been sorted into ascending order. If we take N as the number of values in the list, Selection Sort has an O(N²) time complexity, which makes it inefficient on large lists and it generally performs worse than Insertion Sort.
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'selection-sort',
  },
  INSERTION_SORT: {
    name: 'Insertion Sort',
    description:
  <div className="lead">
    <p>
      Insertion Sort begins at index 1 of the list and temporarily removes this value, leaving a gap. Then from this gap, it iterates backwards through the list comparing each value to the value that has been temporarily removed. If the value in the list is bigger than the number that has been temporarily removed, we shift the number (bigger) number in the list one place to the right. We keep comparing until we find the correct position for the temporarily removed element (reach a number that is equal to or smaller than the number that has been temporarily removed). We repeat this backwards iteration and shifting of elements, until it has been done for every element from index 1 to index numberList.length - 1.
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'insertion-sort',
  },
  MERGE_SORT: {
    name: 'Merge Sort',
    description:
  <div className="lead">
    <p>Merge sort works by recursively splitting the original list of numbers into two lists until the resulting lists be divided no more (each list only has one element in it).</p>
    <br />
    <p>Then, starting at the beginning of the split list, it takes two adjacent lists and compares the first element of each, removing the smaller element and placing it at the end of a new list. It repeats this comparison with the first element of each of the two adjacent lists until all elements from the two lists have been placed and sorted into a new merged list.</p>
    <br />
    <p>
      The sorting process above is repeated for all the adjacent lists on the current level. When they have all been emptied and sorted into merged lists, we repeat the sorting on these lists and so on, until only one element remains which is the fully sorted list.
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'merge-sort',
  },
  QUICK_SORT: {
    name: 'Quick Sort',
    description:
  <div className="lead">
    <p>Quick Sort works by choosing an element in the list as a &apos;pivot&apos;. Any element can be chosen, so in this example the pivot is always the last element of the list. Each element that is not the pivot is compared to the pivot. If the element is smaller or equal to the pivot, it is given a position of left to the pivot, if it is larger it is given a position of right to the pivot. Then, in the resulting lists, a pivot is chosen and the process repeated until only one element is in the resulting list(s).</p>
    <br />
    <p>At this point working from the lowest level values, the list is put back together using the pivot values and their position to their parent pivot value. O(n log n)</p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'quick-sort',
  },
});

export default SortingAlgorithmType;
