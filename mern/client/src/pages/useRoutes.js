import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth } from './Auth';
import {Somepage1} from './Somepage1';
import { Somepage2 } from './Somepage2';
import { Somepage3 } from './Somepage3';

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/somepage1' exact>
                    <Somepage1 />
                </Route>
                <Route path='/somepage2'>
                    <Somepage2 />
                </Route>
                <Route path='/somepage3'>
                    <Somepage3 />
                </Route>
                <Redirect to='somepage1' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/'>
                <Auth />
            </Route>
            {/* <Redirect path='/' /> */}
        </Switch>
    )
}