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
                <div className="nav-wrapper blue-grey darken-1">
                    <span href="#" className="brand-logo ">Logo</span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/somepage1">Создать ссылку</NavLink></li>
                        <li><NavLink to="/somepage2">Sueta</NavLink></li>
                        <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                    </ul>
                </div>
            </nav>
        </nav>
    )
}
