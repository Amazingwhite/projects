import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth } from './Auth';
import { CreatePage } from './CreatePage';
import { DetailPage } from './DetailPage';
import { LinksPage } from './LinksPage';

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
                <Route path='/links' exact>
                    <LinksPage />
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