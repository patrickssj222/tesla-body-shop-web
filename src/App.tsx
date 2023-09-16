import React from 'react';
import { Home } from 'pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ModelSelect } from 'pages/ModelSelect/ModelSelect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="model-select" element={<ModelSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
