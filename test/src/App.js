import Login from './components/Login/Login';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import './App.css';
import { connect } from 'react-redux';
import { logout } from './redux/authReducer';


function App(props) {
  if (props.isAuth) {
    return (
      <>
        <Header logout={props.logout}/>
        <MainPage />
      </>)
  }
  return (<Login />)


}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { logout })(App);
