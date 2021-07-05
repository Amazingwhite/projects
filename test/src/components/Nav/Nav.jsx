import React from 'react'
import { Link } from 'react-router-dom'

export let Nav = () => {
    return(
        <div>
            <h1>Hello world</h1>
            <Link to="/userslist/2"> Click me</Link>
        </div>
    )
}