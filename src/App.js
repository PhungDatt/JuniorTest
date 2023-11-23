import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Women from './Pages/Women/Women';
import Man from './Pages/Man/Man';
import Children from './Pages/Children_Page/Children';
import NoPage from "./Pages/NoPage/Nopage";
import Home from './Pages/Home/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Home" index element={<Home />} />
        <Route path="Man" element={<Man />} />
        <Route path="Women" element={<Women />} />
        <Route path="Children" element={<Children />} />
        <Route path="*" element={<Home />} />

      </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
