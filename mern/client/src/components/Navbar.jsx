import React, { useContext } from "react";
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push("/")
    }

    return (
        <nav>
            <nav>
                <div className="nav-wrapper orange lighten-2">
                    <span href="#" className="brand-logo ">ShortenLink.com  </span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/create">Создать ссылку</NavLink></li>
                        <li><NavLink to="/links">Ссылки</NavLink></li>
                        <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                    </ul>
                </div>
            </nav>
        </nav>
    )
}
