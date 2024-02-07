// Book constructor
function Book(title, author, genre, year, description) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.description = description;
}

// Creating five book instances
const books = [
    new Book("Mystic Legends", "Dan", "Mystic Legends", 2001, "Description of the first book."),
    new Book("Ethereal Fantasy", "AB.d", "Ethereal Fantasy", 2002, "Description of the second book."),
    new Book("Whimsical Adventures", "january", "Whimsical Adventures", 2003, "Description of the third book."),
    new Book("Grim Noir", "Author 4", "Valentine", 2004, "Description of the fourth book."),
    new Book("Galactic Odyssey", "Fredrick ricchard wolf", "Galactic Odyssey", 2005, "Description of the fifth book.")
];
// Function to display books
function displayBooks() {
    const bookList = document.getElementById('bookList');

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        const title = document.createElement('div');
        title.className = 'title';
        title.textContent = book.title;

        const author = document.createElement('div');
        author.className = 'author';
        author.textContent = `Author: ${book.author}`;

        const genre = document.createElement('div');
        genre.className = 'genre';
        genre.textContent = `Genre: ${book.genre}`;

        const year = document.createElement('div');
        year.className = 'year';
        year.textContent = `Year: ${book.year}`;


        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = book.description;

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(genre);
        bookDiv.appendChild(year);
        bookDiv.appendChild(description);

        bookList.appendChild(bookDiv);
    });
}