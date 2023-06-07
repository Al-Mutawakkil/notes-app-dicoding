import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomeView from './views/HomeView';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/add" element={<></>} />
        <Route path="/note/:id" element={<></>} />
        <Route path="/*" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
