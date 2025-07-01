
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Transaction {
  id: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  date: string;
  time: string;
}

interface TransactionState {
  transactions: Transaction[];
  balance: number;
}

const initialState: TransactionState = {
  transactions: [],
  balance: 0,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Omit<Transaction, 'id' | 'date' | 'time'>>) => {
      const now = new Date();
      const transaction: Transaction = {
        ...action.payload,
        id: Date.now().toString(),
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
      };
      
      state.transactions.unshift(transaction);
      
      if (transaction.type === 'credit') {
        state.balance += transaction.amount;
      } else {
        state.balance -= transaction.amount;
      }
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
