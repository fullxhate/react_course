import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
let dialogs = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Kriss'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Sergey'},
    {id: 5, name: 'Anna'},
    {id: 6, name: 'Vasilii'},
]
let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'Salamaliqkum'},
    {id: 4, message: 'Hi!'},
    {id: 5, message: 'Hello!'},
    {id: 6, message: 'Salamaliqkum'},

]
let posts = [
    {id: 1, message: 'hello!', like: 25},
    {id: 2, message: 'how are you?', like: 3},
    {id: 3, message: 'whats wrong?', like: 0},
]




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
