import React from 'react';
import { Home } from 'pages/Home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ModelSelect } from 'pages/ModelSelect/ModelSelect';

import { ModelEdit } from 'pages/ModelEdit/ModelEdit';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="model-select" element={<ModelSelect />} />
        <Route path="model-edit" element={<ModelEdit />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
