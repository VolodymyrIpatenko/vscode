const getTotalRevenue = (transactions) => {
  return transactions.reduce((acc, elem) => acc + elem.amount, 0);
};
