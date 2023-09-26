import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import BaseConverter from './components/BaseConverter/BaseConverter';
import ShowCalculation from './components/BaseConverter/ShowCalculation';
// import SortingAlgorithmHome from './components/SortingAlgorithms/SortingAlgorithmHome';
import SortingAlgorithmType from './types/SortingAlgorithm';
import SortingAlgorithm from './components/SortingAlgorithms/SortingAlgorithm';
import PermutationsAndCombinations from './components/PermutationsAndCombinations/PermutationsAndCombinations';
import SummationCalculator from './components/SummationCalculator/SummationCalculator';
import WhatIsDiscreteMath from './components/WhatIsDiscreteMath';
import NotFound from './components/NotFound';
import PATHS from './types/PATHS';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path={PATHS.Home} element={<Home />} />
          <Route path={PATHS.WhatIsDiscreteMath} element={<WhatIsDiscreteMath />} />
          <Route path={PATHS.BaseConverter} element={<BaseConverter />} />
          <Route path={PATHS.BaseConverterShowCalculation} element={<ShowCalculation />} />
          <Route path={PATHS.SummationCalculator} element={<SummationCalculator />} />
          {/* <Route path={PATHS.SortingAlgorithmHome} element={<SortingAlgorithmHome />} /> */}
          <Route
            path={PATHS.SortingAlgorithmBubbleSort}
            element={(
              <SortingAlgorithm
                sortingAlgorithmName={SortingAlgorithmType.BUBBLE_SORT.name}
                sortingAlgorithmDescription={SortingAlgorithmType.BUBBLE_SORT.description}
                sortingAlgorithmVideo={SortingAlgorithmType.BUBBLE_SORT.video}
                sortingAlgorithmPathName={SortingAlgorithmType.BUBBLE_SORT.pathName}
                sortingAlgorithmIcons={SortingAlgorithmType.BUBBLE_SORT.icon}
              />
)}
          />
          <Route
            path={PATHS.SortingAlgorithmBubbleSortFaster}
            element={(
              <SortingAlgorithm
                sortingAlgorithmName={SortingAlgorithmType.BUBBLE_SORT_FASTER.name}
                sortingAlgorithmDescription={SortingAlgorithmType.BUBBLE_SORT_FASTER.description}
                sortingAlgorithmVideo={SortingAlgorithmType.BUBBLE_SORT_FASTER.video}
                sortingAlgorithmPathName={SortingAlgorithmType.BUBBLE_SORT_FASTER.pathName}
                sortingAlgorithmIcons={SortingAlgorithmType.BUBBLE_SORT_FASTER.icon}
              />
)}
          />
          <Route
            path={PATHS.SortingAlgorithmInsertionSort}
            element={(
              <SortingAlgorithm
                sortingAlgorithmName={SortingAlgorithmType.INSERTION_SORT.name}
                sortingAlgorithmDescription={SortingAlgorithmType.INSERTION_SORT.description}
                sortingAlgorithmVideo={SortingAlgorithmType.INSERTION_SORT.video}
                sortingAlgorithmPathName={SortingAlgorithmType.INSERTION_SORT.pathName}
                sortingAlgorithmIcons={SortingAlgorithmType.INSERTION_SORT.icon}
              />
)}
          />
          <Route
            path={PATHS.SortingAlgorithmMergeSort}
            element={(
              <SortingAlgorithm
                sortingAlgorithmName={SortingAlgorithmType.MERGE_SORT.name}
                sortingAlgorithmDescription={SortingAlgorithmType.MERGE_SORT.description}
                sortingAlgorithmVideo={SortingAlgorithmType.MERGE_SORT.video}
                sortingAlgorithmPathName={SortingAlgorithmType.MERGE_SORT.pathName}
                sortingAlgorithmIcons={SortingAlgorithmType.MERGE_SORT.icon}
              />
)}
          />
          <Route
            path={PATHS.SortingAlgorithmQuickSort}
            element={(
              <SortingAlgorithm
                sortingAlgorithmName={SortingAlgorithmType.QUICK_SORT.name}
                sortingAlgorithmDescription={SortingAlgorithmType.QUICK_SORT.description}
                sortingAlgorithmVideo={SortingAlgorithmType.QUICK_SORT.video}
                sortingAlgorithmPathName={SortingAlgorithmType.QUICK_SORT.pathName}
                sortingAlgorithmIcons={SortingAlgorithmType.QUICK_SORT.icon}
              />
)}
          />
          <Route
            path={PATHS.SortingAlgorithmSelectionSort}
            element={(
              <SortingAlgorithm
                sortingAlgorithmName={SortingAlgorithmType.SELECTION_SORT.name}
                sortingAlgorithmDescription={SortingAlgorithmType.SELECTION_SORT.description}
                sortingAlgorithmVideo={SortingAlgorithmType.SELECTION_SORT.video}
                sortingAlgorithmPathName={SortingAlgorithmType.SELECTION_SORT.pathName}
                sortingAlgorithmIcons={SortingAlgorithmType.SELECTION_SORT.icon}
              />
)}
          />
          <Route path={PATHS.PermutationsAndCombinations} element={<PermutationsAndCombinations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
