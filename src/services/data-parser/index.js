import transactions from '../../data/transactions.json';

function calculateTotal() {
  return parseTransactions()
    .reduce((acc, transaction) => {
      acc += parseFloat(transaction.amount);
      return acc;
    }, 0)
    .toFixed(2);
}

function parseTransactions() {
  return transactions.map(transaction => ({
    date: transaction.Date,
    amount: transaction.Amount
  }));
}

export { parseTransactions, calculateTotal };
