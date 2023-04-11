const books = [{
    title: "hey world",
    author: "Albert  Einstien",
    year: 2000,
},
{
    title: "hye how are you",
    author: "Albert  Einstien",
    year: 2000,
},
{
    title: "Pride how are you",
    author: "Albert  Einstien",
    year: 2000,
},
{
    title: "All the best!",
    author: "Albert  Einstien",
    year: 2000,
},
{
    title: "To kill a Muckingbird",
    author: "Albert  Einstien",
    year: 2000,
}]

function logTitles(titles) {
    titles.sort()
    console.log(titles.join(", "))
}

function extracTitles(books, callback) {
    const titles = books.map((book) => book.title)
    callback(titles)
}

extracTitles(books, logTitles)

