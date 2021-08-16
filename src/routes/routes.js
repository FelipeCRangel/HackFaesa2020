import React from 'react';
import { Switch , Route } from "react-router-dom";

import Auth from '../screens/Auth'
import Home from '../screens/Home'
import Dashboard from '../screens/Produtores'


export const Routes = () => {
    return(
    <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/Auth" component={Auth} />
        <Route path="/Home" component={Home} />
        <Route path="/Dashboard" component={Dashboard} />
    </Switch>
        
    )
}
  