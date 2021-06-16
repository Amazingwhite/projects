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
                <div class="nav-wrapper">
                    <span href="#" class="brand-logo">Logo</span>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><NavLink to="/somepage1">Sass</NavLink></li>
                        <li><NavLink to="/somepage2">Components</NavLink></li>
                        <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                    </ul>
                </div>
            </nav>
        </nav>
    )
}
