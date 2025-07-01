
import React from 'react';
import Dashboard from '../components/Dashboard';
import TransactionForm from '../components/TransactionForm';
import TransactionHistory from '../components/TransactionHistory';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Money Manager</h1>
        <p className="text-gray-600">Track your finances with ease</p>
      </div>
      
      <Dashboard />
      <TransactionForm />
      <TransactionHistory />
    </div>
  );
};

export default Index;
