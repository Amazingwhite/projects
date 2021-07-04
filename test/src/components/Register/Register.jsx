import React from 'react';
import { Redirect } from 'react-router';


export let Register = (props) => {
    if(!localStorage.token) {
        return( <Redirect to='/login'/> )
    }
    return(
        <>
            <h1>Hello</h1>
        </>
    )
}