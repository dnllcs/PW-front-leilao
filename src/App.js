import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PasswordRecovery from './pages/recovery/PasswordRecovery';
import SimpleLayout from './components/SimpleLayout';
import DefaultLayout from './components/DefaultLayout';
import Home from './pages/home/Home';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
        <Route path="/login" element={<SimpleLayout><Login/></SimpleLayout>} />
        <Route path="/register" element={<SimpleLayout><Register /></SimpleLayout>} />
        <Route path="/password-recovery" element={<SimpleLayout><PasswordRecovery /></SimpleLayout> } />
      </Routes>
    </Router>
  );
}

export default App;
