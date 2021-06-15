import React from 'react';
import 'materialize-css';
import { useRoutes } from './pages/useRoutes';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';

function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuth = !!token;
  const routes = useRoutes(isAuth)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuth
    }}>
      <BrowserRouter>
        <div className="container">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
