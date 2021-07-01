import Login from './components/Login/Login';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import './App.css';


function App() {

  let isAuth = false

  if (isAuth) {
    return (
      <>
        <Header />
        <MainPage />
      </>)
  }
  return (<Login />)


}


export default App;
