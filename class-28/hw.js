/**
 * Problem Statement:
You are given an array of objects representing transactions made by customers. Each object contains the following properties:

customerId: Number, representing the unique ID of the customer.
amount: Number, representing the amount of the transaction.
date: String, representing the date of the transaction (in the format "YYYY-MM-DD").

Your task is to write a JavaScript function using functional programming techniques that takes this array of transaction objects and returns an object containing the following information:

totalTransactions: Total number of transactions.
totalAmount: Total amount of all transactions.
averageTransactionAmount: Average amount of transactions.
transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.

INPUT
const transactions = [
 { customerId: 1, amount: 100, date: '2024-03-01' },
 { customerId: 2, amount: 150, date: '2024-03-01' },
 { customerId: 1, amount: 200, date: '2024-03-02' },
 { customerId: 3, amount: 50, date: '2024-03-02' },
 { customerId: 2, amount: 120, date: '2024-03-03' }
];

O/p:
{
  totalTransactions: 5,
  totalAmount: 620,
  averageTransactionAmount: 124,
  transactionsPerDay: {
    '2024-03-01': [
      { customerId: 1, amount: 100, date: '2024-03-01' },
      { customerId: 2, amount: 150, date: '2024-03-01' }
    ],
    '2024-03-02': [
      { customerId: 1, amount: 200, date: '2024-03-02' },
      { customerId: 3, amount: 50, date: '2024-03-02' }
    ],
    '2024-03-03': [
      { customerId: 2, amount: 120, date: '2024-03-03' }
    ]
  },
  transactionsByCustomer: {
    1: [
      { customerId: 1, amount: 100, date: '2024-03-01' },
      { customerId: 1, amount: 200, date: '2024-03-02' }
    ],
    2: [
      { customerId: 2, amount: 150, date: '2024-03-01' },
      { customerId: 2, amount: 120, date: '2024-03-03' }
    ],
    3: [
      { customerId: 3, amount: 50, date: '2024-03-02' }
    ]
  }

 */