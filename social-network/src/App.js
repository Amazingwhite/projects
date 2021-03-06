import React, { Component, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';

// class App extends Component {
//        componentDidMount() {
//               this.props.initializeApp();
//        }
//        render() {
//               if (!this.props.initialized) {
//                      return <Preloader />
//               }
//               return (
//                      <div className='app-wrapper'>
//                             <HeaderContainer />
//                             <Navbar />
//                             <div className='app-wrapper-content'>
//                                    <Route path='/dialogs'
//                                           render={() => <DialogsContainer />} />

//                                    <Route path='/profile/:userId?'
//                                           render={() => <ProfileContainer />} />

//                                    <Route path='/news'
//                                           render={() => <News />} />

//                                    <Route path='/music'
//                                           render={() => <Music />} />

//                                    <Route path='/settings'
//                                           render={() => <Settings />} />

//                                    <Route path='/login'
//                                           render={() => <Login />} />

//                                    <Route path='/users'
//                                           render={() => <UsersContainer />} />
//                             </div>
//                      </div>
//               )
//        }
// }

const App = (props) => {
       useEffect(() => {
              props.initializeApp();
              console.log('component mounted')
       }, [])

       if (!props.initialized) {
              return <Preloader />
       }

       return (
              <div className='app-wrapper'>
                     <HeaderContainer />
                     <Navbar />
                     <div className='app-wrapper-content'>
                            <Route path='/dialogs'
                                   render={() => <DialogsContainer />} />

                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer />} />

                            <Route path='/news'
                                   render={() => <News />} />

                            <Route path='/music'
                                   render={() => <Music />} />

                            <Route path='/settings'
                                   render={() => <Settings />} />

                            <Route path='/login'
                                   render={() => <Login />} />

                            <Route path='/users'
                                   render={() => <UsersContainer />} />
                     </div>
              </div>
       )
}

const mapStateToProps = (state) => ({
       initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);

