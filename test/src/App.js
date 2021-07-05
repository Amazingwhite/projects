import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsToken } from './redux/authReducer';
import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

function App(props) {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsToken(localStorage.token))
  }, [])

  return (
    <>
      {isAuth && <Header />}
      <Redirect from='/' to='/login' />
      <Route path='/mainpage' component={UsersContainer} />
      <Route path='/registration' component={Register} />
      <Route path='/login' component={Login} />
    </>
  )
}

export default App;
