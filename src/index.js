import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Aldrich', 'sans-serif']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
