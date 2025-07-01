
import React from 'react';
import { Wallet } from 'lucide-react';

const Accounts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Accounts</h1>
        <p className="text-gray-600">Manage your bank accounts and wallets</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Wallet className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Accounts Yet</h3>
            <p className="text-gray-500">Add your bank accounts and wallets to track your finances</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
