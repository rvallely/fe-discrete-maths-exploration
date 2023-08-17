import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import BaseConverter from './components/BaseConverter/BaseConverter';
import ShowCalculation from './components/BaseConverter/ShowCalculation';
import { SortingAlgorithmHome } from './components/SortingAlgorithms/SortingAlgorithmHome';
import { getSortedListUsingBubbleSort, getSortedListUsingBubbleSortFaster, getSortedListUsingInsertionSort, getSortedListUsingMergeSort, getSortedListUsingQuickSort, getSortedListUsingSelectionSort } from './utils/server';
import { SortingAlgorithmType } from './types/SortingAlgorithm';
import SortingAlgorithm from './components/SortingAlgorithms/SortingAlgorithm';
import PermutationsAndCombinations from './components/PermutationsAndCombinations/PermutationsAndCombinations';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/base-converter" element={<BaseConverter />} /> 
                    <Route path="/base-converter/show-calculation" element={<ShowCalculation />} /> 
                    <Route path="/sorting-algorithms" element={<SortingAlgorithmHome />} /> 
                    <Route path="/sorting-algorithms/bubble-sort" element={<SortingAlgorithm endpoint={getSortedListUsingBubbleSort} sortingAlgorithmName={SortingAlgorithmType.BUBBLE_SORT.name} sortingAlgorithmDescription={SortingAlgorithmType.BUBBLE_SORT.description} sortingAlgorithmVideo={SortingAlgorithmType.BUBBLE_SORT.video}/>} /> 
                    <Route path="/sorting-algorithms/bubble-sort-faster" element={<SortingAlgorithm endpoint={getSortedListUsingBubbleSortFaster} sortingAlgorithmName={SortingAlgorithmType.BUBBLE_SORT_FASTER.name} sortingAlgorithmDescription={SortingAlgorithmType.BUBBLE_SORT_FASTER.description} sortingAlgorithmVideo={SortingAlgorithmType.BUBBLE_SORT_FASTER.video}/>} /> 
                    <Route path="/sorting-algorithms/insertion-sort" element={<SortingAlgorithm endpoint={getSortedListUsingInsertionSort} sortingAlgorithmName={SortingAlgorithmType.INSERTION_SORT.name} sortingAlgorithmDescription={SortingAlgorithmType.INSERTION_SORT.description} sortingAlgorithmVideo={SortingAlgorithmType.INSERTION_SORT.video}/>} /> 
                    <Route path="/sorting-algorithms/merge-sort" element={<SortingAlgorithm endpoint={getSortedListUsingMergeSort} sortingAlgorithmName={SortingAlgorithmType.MERGE_SORT.name} sortingAlgorithmDescription={SortingAlgorithmType.MERGE_SORT.description} sortingAlgorithmVideo={SortingAlgorithmType.MERGE_SORT.video}/>} /> 
                    <Route path="/sorting-algorithms/quick-sort" element={<SortingAlgorithm endpoint={getSortedListUsingQuickSort} sortingAlgorithmName={SortingAlgorithmType.QUICK_SORT.name} sortingAlgorithmDescription={SortingAlgorithmType.QUICK_SORT.description} sortingAlgorithmVideo={SortingAlgorithmType.QUICK_SORT.video}/>} /> 
                    <Route path="/sorting-algorithms/selection-sort" element={<SortingAlgorithm endpoint={getSortedListUsingSelectionSort} sortingAlgorithmName={SortingAlgorithmType.SELECTION_SORT.name} sortingAlgorithmDescription={SortingAlgorithmType.SELECTION_SORT.description} sortingAlgorithmVideo={SortingAlgorithmType.SELECTION_SORT.video}/>} /> 
                    <Route path="/permutations-and-combinations" element={<PermutationsAndCombinations/>} /> 
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
