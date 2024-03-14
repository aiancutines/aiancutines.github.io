import { v4 as uuidv4 } from 'uuid';
import { appendFileSync } from 'fs';

import express from 'express';


//function validating
function addAccount(accountDetails) {
    const [book_name, ISBN, author, year_published] = accountDetails; //assign the array elements

    if (!book_name || ISBN || !author || !year_published) { //check if all fields are present
        //console.log('Missing fields'); //debugger
        return false; // All fields are not present
    }

    if (typeof book_name !== 'string' || typeof author !== 'string') { //check if string
        //console.log('Invalid field type');
        return false; // Field types are not valid
    }

    if (book_name.trim() === '' || author.trim() === '') { //check if empty
        //console.log('Empty first name, last name, or email');
        return false; // First name, last name, or email is empty
    }

    const userData = `${book_name},${ISBN},${author},${year_published}\n`;

    try {
        appendFileSync('users.txt', userData);
        //console.log('User saved:', userData); //debugger
        return true;
    } catch (err) {
        //console.error('Error writing to file:', err); //debugger
        return false;
    }
}

export {addAccount};

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/add-book', (req, res) => {
    res.send(req.body);
    //res.json({success: true});
  });

app.listen(3000, () => { console.log('Server started at port 3000')} );