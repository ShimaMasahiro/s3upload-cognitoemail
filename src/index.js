// Program Name: index.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-21
// Last Modified Date: 2024-03-28

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import './index.css';
import App from './App';

Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);