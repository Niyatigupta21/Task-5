
import React from 'react';
import { BarChart2 } from 'lucide-react';

const Budgets = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Budgets</h1>
        <p className="text-gray-600">Set and track your spending budgets</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <BarChart2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Budgets Set</h3>
            <p className="text-gray-500">Create budgets to control your spending and reach your financial goals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
