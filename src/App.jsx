import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomeView from './views/HomeView';
import NavBar from './components/NavBar';
import DetailNoteWrapper from './views/DetailNoteView';
import ArchiveView from './views/ArchiveView';
import AddNoteView from './views/AddNoteView';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/addnote" element={<AddNoteView />} />
        <Route path="/notes/:id" element={<DetailNoteWrapper />} />
        <Route path="/archivednotes" element={<ArchiveView />} />
        <Route path="/*" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
