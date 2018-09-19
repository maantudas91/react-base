import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import App from './App';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from "react-redux";
import store, { history } from './store'
import { Authorize } from './rdx/actions/AuthActions';

store.dispatch(Authorize())

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter >
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
