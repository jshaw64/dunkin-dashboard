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

function getTransactionsLastNDays(days) {
  return parseTransactions().filter(transaction => {
    const dateDiff = Math.floor(
      (new Date() - new Date(transaction.date)) / (1000 * 60 * 60 * 24)
    );
    return dateDiff <= days;
  });
}

export {
  parseTransactions,
  calculateTotal,
  getTransactionsLastNDays
};
