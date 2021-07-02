import Login from './components/Login/Login';
import { Header } from './components/Header/Header';
import  MainPage  from './components/MainPage/MainPage';
import './App.css';
import { connect } from 'react-redux';
import { logout } from './redux/authReducer';
import { useEffect } from 'react';


function App(props) {

  useEffect( () => {

  }, [localStorage.token])

  if (localStorage.token) {
    return (
      <>
        <Header logout={props.logout}/>
        <MainPage />
      </>)
  }
  return (<Login />)

//localstorage

//login, registration, mainpage
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { logout })(App);
