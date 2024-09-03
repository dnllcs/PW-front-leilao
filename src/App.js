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
import PrivateRouter from './components/PrivateRouter';
import PasswordChange from './pages/change-password/PasswordChange';
import './config/i18n';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRouter/>}>
          <Route path='/' element={<DefaultLayout><Home /></DefaultLayout>} /> 
          <Route path='/user/profile' element={<DefaultLayout><Profile /></DefaultLayout>} /> 
        </Route>
        <Route path="/login" element={<SimpleLayout><Login/></SimpleLayout>} />
        <Route path="/register" element={<SimpleLayout><Register /></SimpleLayout>} />
        <Route path="/password-recovery" element={<SimpleLayout><PasswordRecovery /></SimpleLayout> } />
        <Route path="/password-change" element={<SimpleLayout><PasswordChange /></SimpleLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
