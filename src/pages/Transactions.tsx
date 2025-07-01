
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import TransactionForm from '../components/TransactionForm';
import TransactionHistory from '../components/TransactionHistory';

const Transactions = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Transactions</h1>
          <p className="text-gray-600">Manage your income and expenses</p>
        </div>
        
        <TransactionForm />
        <TransactionHistory />
      </div>
    </Provider>
  );
};

export default Transactions;
