import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './features/dashboard/Dashboard';
import Transaction from './features/transaction/Transaction';
import Users from './features/users/Users';
import Login from './features/login/Login';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/users" element={<Users />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function AccessDenied() {
  return <>Access Denied!</>;
}

function NotFound() {
  return <>Not Found!</>;
}

export default App;
