import React from 'react';
import { render } from 'react-dom';
import { Root } from './containers';
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.js';
import './index.css';

render(<Root />, document.getElementById('root'));

M.AutoInit();
