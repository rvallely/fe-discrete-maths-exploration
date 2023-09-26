/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import BubbleSortVideo from '../assets/cardboard_work_desks.mp4';
import bubbleSortIcon from '../assets/bubbleSortIcon.png';
import bubbleSortFasterIcon from '../assets/bubbleSortFasterIcon.png';
import mergeSortIcon1 from '../assets/mergeSortIcon1.png';
import mergeSortIcon2 from '../assets/mergeSortIcon2.png';
import quickSortIcon1 from '../assets/quickSortIcon1.png';
import quickSortIcon2 from '../assets/quickSortIcon2.png';
import selectionSortIcon1 from '../assets/selectionSortIcon1.png';
import selectionSortIcon2 from '../assets/selectionSortIcon2.png';
import insertionSortIcon1 from '../assets/insertionSortIcon1.png';
import insertionSortIcon2 from '../assets/insertionSortIcon2.png';

const SortingAlgorithmType = Object.freeze({
  BUBBLE_SORT: {
    name: 'Bubble Sort',
    description:
  <div className="lead">
    <p>
      This sorting algorithm loops through the elements in a list, compares the adjacent elements and swaps them if they are out of order. This process is repeated until no swaps are needed in an entire iteration of the list.
    </p>
    <p>
      If N is the number of elements in the list, Bubble Sort has an average time complexity of O(N²) and is considered to be a relatively inefficient algorithm. This is because, as the number of elements in the list increases, the steps potentially needed to complete the sorting process increase dramatically.
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'bubble-sort',
    icon: {
      1: bubbleSortIcon,
      2: bubbleSortIcon,
    },
  },
  BUBBLE_SORT_FASTER: {
    name: 'Bubble Sort Faster',
    description:
  <div className="lead">
    <p>
      {/* eslint-disable-next-line no-trailing-spaces */}
      This sorting algorithm is an optimised version of
      {' '}
      <Link to="/sorting-algorithms/bubble-sort"> Bubble Sort</Link>
      . Like Bubble Sort, it loops through the elements in a list, compares the adjacent elements and swaps them if they are out of order. But diverging from Bubble Sort, at the end of each list iteration, the last element is removed from the list and added to the start of a separate sorted list. The processes are repeated until no swaps were needed in an entire iteration of the original list. At this point what is left of the original list is joined to the start of the separate list, to form one fully sorted list.
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'bubble-sort-faster',
    icon: {
      1: bubbleSortFasterIcon,
      2: bubbleSortFasterIcon,
    },
  },
  SELECTION_SORT: {
    name: 'Selection Sort',
    description:
  <div className="lead">
    <p>
      Selection Sort works by repeatedly finding the smallest element from the unsorted part of a list and moving it to the beginning of the sorted part. The algorithm starts with the entire list considered as unsorted. It goes through the unsorted part of the list to find the smallest element. Once the smallest element is found, it is swapped with the first element of the unsorted part, effectively moving it to the beginning of the sorted part of the list. These steps are repeated for the remaining unsorted portion of the list until the entire list is sorted.
    </p>
    <p>
      If we take N as the number of values in the list, Selection Sort has an average time complexity of O(N²), which makes it inefficient for large datasets and it generally performs worse than
      {' '}
      <Link to="/sorting-algorithms/insertion-sort">Insertion Sort</Link>
      .
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'selection-sort',
    icon: {
      1: selectionSortIcon1,
      2: selectionSortIcon2,
    },
  },
  INSERTION_SORT: {
    name: 'Insertion Sort',
    description:
  <div className="lead">
    <p>
      Insertion Sort algorithm works by dividing the input list into two parts: a sorted part and an unsorted part. It repeatedly takes an element from the unsorted part and inserts it into its correct position within the sorted part of the array.
    </p>
    <p>
      Insertion Sort starts with the first element of the list considered as the sorted part. The remaining elements are considered as the unsorted part. It takes one element at a time from the unsorted part and compares it with the elements in the sorted part. It then finds the correct position in the sorted part where the element belongs by shifting larger elements to the right. These steps are repeated until all elements from the unsorted part are moved to the sorted part, and the entire list is sorted. Insertion Sort has an avergage and worst case time complexity of O(N²), where N is the number of elements in the list, making it inefficient for large datasets.
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'insertion-sort',
    icon: {
      1: insertionSortIcon1,
      2: insertionSortIcon2,
    },
  },
  MERGE_SORT: {
    name: 'Merge Sort',
    description:
  <div className="lead">
    <p>
      Merge sort is a divide-and-conquer sorting algorithm that works by recursively dividing an unsorted list into smaller sublists until each sublist only contains one element. Then, it recursively takes two adjacent sublists and sorts and merges them together by looking at the first element of each list, eventually  resulting in one fully sorted list.
    </p>
    <p>
      Merge Sort is an efficient sorting alorithm, especially for large datasets and taking N as the number of elements in the list, it has an average time complexity of O(N log N).
    </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'merge-sort',
    icon: {
      1: mergeSortIcon1,
      2: mergeSortIcon2,
    },
  },
  QUICK_SORT: {
    name: 'Quick Sort',
    description:
  <div className="lead">
    <p>
      Quick Sort is a divide-and-conquer sorting algorithm. It works by choosing an element in the list as the &apos;pivot&apos;, iterating through the other elements of the list and adding each element to one of two sublists. One sublist contains elements that are smaller than or equal to the pivot and the other contains the elements that are  greater than the pivot. The process is then performed recursively on the sublists, until only one element remains in each sublist.
    </p>
    <p>At this point, working from the lowest level values the list is put back together using the pivot values and their position to their parent pivot value. Taking N as the number of elements in the list, on average Quick Sort has a time complexity of O(N log N), making it one of the fastest sorting algorithms for large datasets. </p>
  </div>,
    video: BubbleSortVideo,
    pathName: 'quick-sort',
    icon: {
      1: quickSortIcon1,
      2: quickSortIcon2,
    },
  },
});

export default SortingAlgorithmType;
