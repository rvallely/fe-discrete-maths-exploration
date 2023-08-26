import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import BaseConverter from './components/BaseConverter/BaseConverter';
import ShowCalculation from './components/BaseConverter/ShowCalculation';
import SortingAlgorithmHome from './components/SortingAlgorithms/SortingAlgorithmHome';
import { getSortedList } from './utils/server';
import { SortingAlgorithmType } from './types/SortingAlgorithm';
import SortingAlgorithm from './components/SortingAlgorithms/SortingAlgorithm';
import PermutationsAndCombinations from './components/PermutationsAndCombinations/PermutationsAndCombinations';
import SummationCalculator from './components/SummationCalculator/SummationCalculator';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/base-converter' element={<BaseConverter />} /> 
                    <Route path='/base-converter/show-calculation' element={<ShowCalculation />} />
                    <Route path='/summation-calculator' element={<SummationCalculator />} /> 
                    <Route path='/sorting-algorithms' element={<SortingAlgorithmHome />} /> 
                    <Route path='/sorting-algorithms/bubble-sort' element={<SortingAlgorithm
                        sortingAlgorithmName={SortingAlgorithmType.BUBBLE_SORT.name}
                        sortingAlgorithmDescription={SortingAlgorithmType.BUBBLE_SORT.description}
                        sortingAlgorithmVideo={SortingAlgorithmType.BUBBLE_SORT.video}
                        sortingAlgorithmPathName={SortingAlgorithmType.BUBBLE_SORT.pathName}
                        />}
                    /> 
                    <Route path='/sorting-algorithms/bubble-sort-faster' element={<SortingAlgorithm
                        sortingAlgorithmName={SortingAlgorithmType.BUBBLE_SORT_FASTER.name}
                        sortingAlgorithmDescription={SortingAlgorithmType.BUBBLE_SORT_FASTER.description}
                        sortingAlgorithmVideo={SortingAlgorithmType.BUBBLE_SORT_FASTER.video}
                        sortingAlgorithmPathName={SortingAlgorithmType.BUBBLE_SORT_FASTER.pathName}
                        />}
                    /> 
                    <Route path='/sorting-algorithms/insertion-sort' element={<SortingAlgorithm 
                        sortingAlgorithmName={SortingAlgorithmType.INSERTION_SORT.name}
                        sortingAlgorithmDescription={SortingAlgorithmType.INSERTION_SORT.description}
                        sortingAlgorithmVideo={SortingAlgorithmType.INSERTION_SORT.video}
                        sortingAlgorithmPathName={SortingAlgorithmType.INSERTION_SORT.pathName}
                        />}
                    /> 
                    <Route path='/sorting-algorithms/merge-sort' element={<SortingAlgorithm 
                        sortingAlgorithmName={SortingAlgorithmType.MERGE_SORT.name}
                        sortingAlgorithmDescription={SortingAlgorithmType.MERGE_SORT.description}
                        sortingAlgorithmVideo={SortingAlgorithmType.MERGE_SORT.video}
                        sortingAlgorithmPathName={SortingAlgorithmType.MERGE_SORT.pathName}
                        />}
                    /> 
                    <Route path='/sorting-algorithms/quick-sort' element={<SortingAlgorithm 
                        sortingAlgorithmName={SortingAlgorithmType.QUICK_SORT.name}
                        sortingAlgorithmDescription={SortingAlgorithmType.QUICK_SORT.description}
                        sortingAlgorithmVideo={SortingAlgorithmType.QUICK_SORT.video}
                        sortingAlgorithmPathName={SortingAlgorithmType.QUICK_SORT.pathName}
                        />}
                    /> 
                    <Route path='/sorting-algorithms/selection-sort' element={<SortingAlgorithm 
                        sortingAlgorithmName={SortingAlgorithmType.SELECTION_SORT.name}
                        sortingAlgorithmDescription={SortingAlgorithmType.SELECTION_SORT.description}
                        sortingAlgorithmVideo={SortingAlgorithmType.SELECTION_SORT.video}
                        sortingAlgorithmPathName={SortingAlgorithmType.SELECTION_SORT.pathName}
                        />}
                    /> 
                    <Route path='/permutations-and-combinations' element={<PermutationsAndCombinations/>} /> 
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
