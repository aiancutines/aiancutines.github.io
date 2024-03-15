// requests.js

import fs from 'fs';

// Function to check if ISBN already exists in the file
function isISBNUnique(isbn) {
    const data = fs.readFileSync('books.txt', 'utf8');
    const lines = data.split('\n');
    for (const line of lines) {
        const book = line.split(',');
        if (book[1] === isbn) {
            return false; // ISBN already exists
        }
    }
    return true; // ISBN is unique
}

// Handler for adding books
export function handleAddBook(req, res) {
    const { bookName, isbn, author, yearPublished } = req.body;

    if (bookName && isbn && author && yearPublished) {
        if (!isISBNUnique(isbn)) {
            res.json({ success: false, error: 'ISBN already exists' });
            return;
        }

        const bookData = {
            bookName,
            isbn,
            author,
            yearPublished
        };

        // Write book data to a text file
        const bookString = `${bookName},${isbn},${author},${yearPublished}\n`;
        fs.appendFile('books.txt', bookString, (err) => {
            if (err) {
                console.error('Error saving book to file:', err);
                res.json({ success: false, error: 'Error saving book to file' });
            } else {
                console.log('Book added and saved to file:', bookData);
                res.json({ success: true });
            }
        });
    } else {
        res.json({ success: false, error: 'Missing fields' });
    }
}


// Handler for retrieving book details by ISBN and Author
export function findByISBNAndAuthor(req, res) {
    const { isbn, author } = req.query;

    // Here you can implement logic to search for books by ISBN and Author
    // Return the matching book details as response
    res.send(`Searching for book with ISBN ${isbn} and Author ${author}`);
}

// Handler for retrieving book details by Author
export function findByAuthor(req, res) {
    const { author } = req.query;

    // Here you can implement logic to search for books by Author
    // Return the matching book details as response
    res.send(`Searching for books by Author ${author}`);
}

