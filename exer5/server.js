import express from 'express';
import bodyParser from 'body-parser';
import { handleAddBook, findByISBNAndAuthor, findByAuthor } from './request.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/add-book', handleAddBook);
app.get('/find-by-isbn-author', findByISBNAndAuthor);
app.get('/find-by-author', findByAuthor);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
