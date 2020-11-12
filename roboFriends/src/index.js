import React from 'react'; //responsible for view
import ReactDOM from 'react-dom'; // can have ReactNative etc 
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';//allows apps to work faster and potentially offline
import 'tachyons';
import {Provider} from 'react-redux';
import {store} from  './store';
//
ReactDOM.render(<Provider store ={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
