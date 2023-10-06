import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import SortingAlgorithmType from './types/SortingAlgorithm';
import SortingAlgorithm from './components/SortingAlgorithms/SortingAlgorithm';
import PermutationsAndCombinations from './components/PermutationsAndCombinations/PermutationsAndCombinations';
import WhatIsDiscreteMaths from './components/WhatIsDiscreteMaths';
import NotFound from './components/NotFound';
import NumberBasesPrimer from './components/NumberBases/Primer/NumberBasesPrimer';
import PATHS from './types/PATHS';
import RealWorldUses from './components/NumberBases/RealWorldUses';
import BaseConverter from './components/NumberBases/BaseConverter/BaseConverter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          {console.log('PATHS.Home.mainPath: ', PATHS.Home.mainPath)}
          <Route path={PATHS.Home.mainPath} element={<Home />} />
          <Route path={PATHS.WhatIsDiscreteMaths.mainPath} element={<WhatIsDiscreteMaths />} />
          <Route path={PATHS.NumberBases.subPaths.primer} element={<NumberBasesPrimer />} />
          <Route path={PATHS.NumberBases.subPaths['Real World Uses']} element={<RealWorldUses />} />
          <Route path={PATHS.NumberBases.subPaths['Base Converter']} element={<BaseConverter />} />
          <Route
            path={PATHS.SortingAlgorithms.subPaths.SortingAlgorithmBubbleSort}
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
            path={PATHS.SortingAlgorithms.subPaths.SortingAlgorithmBubbleSortFaster}
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
            path={PATHS.SortingAlgorithms.subPaths.SortingAlgorithmInsertionSort}
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
            path={PATHS.SortingAlgorithms.subPaths.SortingAlgorithmMergeSort}
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
            path={PATHS.SortingAlgorithms.subPaths.SortingAlgorithmQuickSort}
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
          {console.log(PATHS.SortingAlgorithms.subPaths.SortingAlgorithmSelectionSort, '<<< selection sort path')}
          <Route
            path={PATHS.SortingAlgorithms.subPaths.SortingAlgorithmSelectionSort}
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
