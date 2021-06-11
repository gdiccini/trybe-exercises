// Banco
db.transactions.insertMany([
  { value: 5900, from: "Dave America", to: "Ned Flanders", bank: 'International' },
  { value: 1000, from: "Mark Zuck", to: "Edna Krabappel", bank: 'FloridaBank' },
  { value: 209, from: "Lisa Simpson", to: "Dave America", bank: 'bankOfAmerica' },
  { value: 10800, from: "Arnold Schuz", to: "Mark Zuck", bank: 'JPMorgan' },
  { value: 850, from: "Barney Gumble", to: "Lisa Simpson", bank: 'Citigroup' },
  { value: 76000, from: "Ned Flanders", to: "Edna Krabappel", bank: 'JPMorgan' },
  { value: 1280, from: "Dave America", to: "Homer Simpson", bank: 'Citigroup' },
  { value: 7000, from: "Arnold Schuz", to: "Ned Flanders", bank: 'International' },
  { value: 59020, from: "Homer Simpson", to: "Lisa Simpson", bank: 'International' },
  { value: 100, from: "Mark Zuck", to: "Barney Gumble", bank: 'floridaBank' },
]);

// 1. Selecione todas as transações feitas pelo cliente chamado "Dave America";
db.transactions.aggregate([{ $match: { from: "Dave America" } }]);

// 2. Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";
db.transactions.aggregate([{ $match: { $or: [{to: "Lisa Simpson"}, { value: { $gte: 700, $lte: 6000}}]} } ]);

// 3. Selecione três transações com o valor acima de 1000.
db.transactions.aggregate([{ $match: { value: { $gt: 1000} } }, { $limit: 3 } ]);

// 4. Selecione todos os bancos;
db.transactions.aggregate([{ $group: { _id: "$bank" } }]);

// 5. Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([{ $group: { _id: "$bank", count: { $sum: 1 }, total_transactions: { $sum: "$value" } } }]);

// 6. Selecione o valor total de transações;
db.transactions.aggregate([{ $group: { _id: null, total_transactions: { $sum: "$value"} } }]);

// 7. Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate([{ $group: { _id: "$bank", count: { $sum: 1 }, total_transactions: { $sum: "$value" } } }, { $match: { "total_transactions": { $gt: 1000 } } }]);

// 8. Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "from", as: "clients_transactions" } }]);

// 9. Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "to", as: "received_transactions" } }, { $limit: 4 }]);

// 10. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([{ $match: { State: "Florida" } }, { $lookup: { from: "transactions", localField: "name", foreignField: "to", as: "transaction_history" } }]);
