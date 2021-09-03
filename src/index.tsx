import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [{
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposity',
        category: 'Salary',
        created: new Date(),
      },
      {
        id: 2,
        title: 'Transaction 2',
        amount: 250,
        type: 'deposity',
        category: 'Food',
        created: new Date(),
      }]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);