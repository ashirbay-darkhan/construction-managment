import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';
import Sidebar from "../Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Today from "../Today";
import Inbox from "../Inbox";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard setIsAuthenticated={setIsAuthenticated} />}></Route>
            <Route path="/today" element={<Today />}></Route>
            <Route path="/inbox" element={<Inbox />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
