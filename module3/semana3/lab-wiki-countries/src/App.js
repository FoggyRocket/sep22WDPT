import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';

function App() {
  return (
<div className="App">

    <Routes>
      <Route path="/" element={<h1>Este es un home</h1>} />
      <Route path="/login" element={<h1>Login</h1>}/>
      {/* aninada */}
      <Route path="dashboard/*" element ={<Dashboard/>}/>
    </Routes>
</div>
  );
}

export default App;
