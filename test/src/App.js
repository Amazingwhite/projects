import Login from './components/Login/Login';
import { Header } from './components/Header/Header';
import { Register } from './components/Register/Register';
import MainPage from './components/MainPage/MainPage';
import './App.css';
import { connect, useDispatch } from 'react-redux';
import { setIsToken } from './redux/authReducer';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsToken(localStorage.token))
  }, [])

  return (
    <>
      <Header />
      <Route path='/mainpage' component={MainPage} />
      <Route path='/registration' component={Register} />
      <Route path='/login' component={Login} />
    </>
  )

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, null)(App);
