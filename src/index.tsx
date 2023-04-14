import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);
