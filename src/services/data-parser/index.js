import transactions from '../../data/transactions.json';

function parseTransactions() {
  return transactions.map(transaction => ({
    date: transaction.Date,
    amount: transaction.Amount
  }));
}

export { parseTransactions };
