import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {MasterProvider} from './masterProvider';
import history from "./history";
import './reset.css';
import './normalize.css';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter history={history}>
		<MasterProvider>
			<AppRouter/>
		</MasterProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
serviceWorker.unregister();