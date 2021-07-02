import Login from './components/Login/Login';
import { Header } from './components/Header/Header';
import  MainPage  from './components/MainPage/MainPage';
import './App.css';
import { connect, useDispatch } from 'react-redux';
import { logout, setIsToken } from './redux/authReducer';
import { useEffect } from 'react';

function App(props) {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(setIsToken(localStorage.token))
  }, [])

  if (props.isAuth) {
    return (
      <>
        <Header/>
        <MainPage />
      </>)
  }

  return (<Login />)

//login, registration, mainpage

    
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, null)(App);
