import 'react-app-polyfill/ie11';
import React from 'react';
import {default as ReactDOM} from 'react-dom';
import Application from './main/Application';
import './index.scss';
import Grouping from './main/Grouping';

ReactDOM.render(
  <React.StrictMode>
    {/*<Application />*/}
    <Grouping />
  </React.StrictMode>,
  document.getElementById('root')
);
