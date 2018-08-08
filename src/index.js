import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

import HeaderComponent from './components/HeaderComponent'
import ViewReportsContainer from './containers/ViewReportsContainer'
import CreateReportsContainer from './containers/CreateReportsContainer'

import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Fragment>
                <HeaderComponent />
                <Switch>
                    <Route exact path='/' component={ViewReportsContainer} />
                    <Route exact path='/create' component={CreateReportsContainer} />
                </Switch>
            </Fragment>
        </HashRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
