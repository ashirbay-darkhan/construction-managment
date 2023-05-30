import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';
import Sidebar from "../Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Today from "../Today";
import Week from "../Week";
import Chat from "../Chat";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <BrowserRouter>
          <Sidebar setIsAuthenticated={setIsAuthenticated} />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/today" element={<Today />}></Route>
            <Route path="/week" element={<Week />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
