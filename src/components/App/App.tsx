import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Reset from "../Reset/Reset";
import Dashboard from "../Dashboard/Dashboard";

function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
  );
}

export default App;
