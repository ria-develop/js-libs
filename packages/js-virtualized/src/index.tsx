import 'react-app-polyfill/ie11';
import React from 'react';
import {default as ReactDOM} from 'react-dom';
import Application from './main/Application';
import './index.scss';

ReactDOM.render(<Application />, document.getElementById('root'));
