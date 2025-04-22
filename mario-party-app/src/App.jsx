import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form'; // Ensure Form is imported
import Squad from './components/Squad'; // Ensure Squad is imported
import './App.css';
import Navbar from './components/Navbar';
import Updated from './components/Updated';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
            <Home />

          </>
        } />
        <Route path="/squads" element={
          <>
          <Navbar />
          <Squad />
          </>
          } />
          <Route path="/create" element={
            <>
            <Navbar />
            <Form />
            </>
          }/>
          <Route path="/edit/:id" element={
        <>
        <Navbar />
        <Updated />
        </>  
        } />
        <Route 
        path="/details/:id"
        element={
          <>
          <Navbar />
          <Details />
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
