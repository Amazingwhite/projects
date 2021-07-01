import { Route } from 'react-router-dom';
import { Login } from '../src/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Route path='/login' 
                render={() => <Login />} />
      </BrowserRouter>
    </>
  );
}

export default App;
