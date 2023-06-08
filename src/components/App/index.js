import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';
import Sidebar from "../Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Today from "../Today";
import Week from "../Week";
import Chat from "../Chat";
import PlanningAndDesign from "../PlanningAndDesign";
import SitePreparation from "../SitePreparation";
import Foundation from "../Foundation";
import Framing from "../Framing";
import Plumbing from "../Plumbing";
import Insulation from "../Insulation";
import Interior from "../Interior";
import Exterior from "../Exterior";
import Home from "../Home";
import {PrivateRoute} from "../../PrivateRoute";
import {AuthProvider} from "../../context/AuthContext";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);


  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <AuthProvider>
      {isAuthenticated ? (
        <BrowserRouter>
          <Sidebar setIsAuthenticated={setIsAuthenticated} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/planning" element={<PlanningAndDesign />}></Route>
            <Route path="/sitePreparation" element={<SitePreparation />}></Route>
            <Route path="/foundation" element={<Foundation />}></Route>
            <Route path="/framing" element={<Framing />}></Route>
            <Route path="/plumbing" element={<Plumbing />}></Route>
            <Route path="/insulation" element={<Insulation />}></Route>
            <Route path="/interior" element={<Interior />}></Route>
            <Route path="/exterior" element={<Exterior />}></Route>
            <Route path="/today" element={<Today />}></Route>
            <Route path="/week" element={<Week />}></Route>
            <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </AuthProvider>
  );
};

export default App;
