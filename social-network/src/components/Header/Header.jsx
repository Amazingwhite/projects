import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../styles/Header.module.css'

const Header = (props) => {
  return <header className={classes.header}>
    <img src='https://avatars.mds.yandex.net/get-zen_doc/1855206/pub_5e916f116102d25caa23d104_5e9178b0ca6eba4f096c70c9/scale_1200' />
    
      <div className={classes.loginBlock}>
        {props.isAuth
          ? <div> {props.login} - <button onClick={props.logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}

      </div>
  </header>
}

export default Header;