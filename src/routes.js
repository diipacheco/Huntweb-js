import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Product from './Pages/Product';


import Main from './Pages/Main'

const Routes = () => (
    <BrowserRouter>
       <Switch>
           <Route exact path='/' component={Main} />
           <Route path="/products/:id" component={Product}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;