import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';
import { ContextWrapper } from './helpers/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper >
      <App/>
    </ContextWrapper>
  </React.StrictMode>
);

