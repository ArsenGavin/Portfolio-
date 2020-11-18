import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './componants/App';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

