import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter } from 'react-router-dom';

import { faStroopwafel, faAngleDown, faPaperPlane, faSignInAlt, faPlay, faDollarSign, faComments, faArrowLeft, faHistory, faHome, faSearch, faUser, faHeart, faShare, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel, faAngleDown, faPaperPlane, faSignInAlt, faPlay, faDollarSign, faComments, faArrowLeft, faHistory, faHome, faSearch, faUser, faHeart, faShare, faTimes);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
