import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store/* , persistor  */} from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

const root = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  root,
);

// "homepage": "https://yegorgangalo.github.io/goit-react-hw-03-phonebook",