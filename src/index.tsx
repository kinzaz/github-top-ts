import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { MainProvider } from './Providers/MainProvider';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
	<MainProvider>
		<App />
	</MainProvider>
);
