// Exercício 1 : Altere o imdbRating para 7.7 no filme Batman.
db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 } });

// Exercício 2 : Altere budget para 1 no filme Godzilla .
db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 } });

// Exercício 3 : Altere budget para 15 e imdbRating para 5.5 no filme Home Alone .
db.movies.updateOne({ title: "Home Alone" }, { $set: { budget: 15, imdbRating: 5.5 } });

// Exercício 4 : Aumente em 2 o imdbRating do filme Batman .
db.movies.updateOne({ title: "Batman" }, { $inc: { imdbRating: 2 } });