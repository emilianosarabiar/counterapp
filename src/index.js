/* eslint-disable react/jsx-no-undef */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';

//import PrimeraApp from './PrimeraApp'
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#app');


ReactDOM.render( < CounterApp value = { 10 }
        /> , divRoot);