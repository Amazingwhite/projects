import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth } from './Auth';
import {CreatePage} from './CreatePage';
import { DetailPage } from './DetailPage';
import { Somepage3 } from './Somepage3';

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/create' exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Route path='/somepage3'>
                    <Somepage3 />
                </Route>
                <Redirect to='/create' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/'>
                <Auth />
            </Route>
        </Switch>
    )
}