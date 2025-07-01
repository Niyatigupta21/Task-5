
import React from 'react';
import { FileText } from 'lucide-react';

const Debts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Debts</h1>
        <p className="text-gray-600">Track and manage your debts and loans</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Debts Tracked</h3>
            <p className="text-gray-500">Add your debts and loans to track payments and progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debts;
