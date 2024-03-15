import needle from 'needle';

// Test Case 1: Adding a book
const addBookData = {
    bookName: 'The Little Prince',
    isbn: '978-0156012195',
    author: 'Antoine Saint-Exupery',
    yearPublished: '1943'
};

needle.post('http://localhost:3000/add-book', addBookData, { json: true }, (err, response) => {
    if (err) {
        console.error('Error adding book:', err);
    } else {
        console.log('Book added successfully:', response.body);
    }
});

// Test Case 2: Finding by ISBN and author
const findByISBNAndAuthorParams = {
    isbn: '1234567890',
    author: 'John Doe'
};

needle.get('http://localhost:3000/find-by-isbn-author', { params: findByISBNAndAuthorParams }, (err, response) => {
    if (err) {
        console.error('Error finding by ISBN and author:', err);
    } else {
        console.log('Book found by ISBN and author:', response.body);
    }
});

// Test Case 3: Finding by author
const findByAuthorParams = {
    author: 'John Doe'
};

needle.get('http://localhost:3000/find-by-author', { params: findByAuthorParams }, (err, response) => {
    if (err) {
        console.error('Error finding by author:', err);
    } else {
        console.log('Books found by author:', response.body);
    }
});
