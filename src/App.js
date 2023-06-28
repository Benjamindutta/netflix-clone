import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const user = null;
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
