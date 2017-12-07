import React from 'react';
import ReactDOM from 'react-dom';

// here we import tachyons as a package from our node_modules folder
import 'tachyons';
import './css/main.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
