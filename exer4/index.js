import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'fs';

//function for generating unique ID
function generateUniqueID(firstName, lastName) {
    const uniqueString = uuidv4().substring(0, 8); //get the first 8 elements
    return (firstName.charAt(0).toLowerCase() + lastName.toLowerCase() + uniqueString);
}

//function on adding account
function addAccount(accountDetails) {
    const [firstName, lastName, email, age] = accountDetails; //assign the array elements

    if (!firstName || !lastName || !email || !age) { //check if all fields are present
        //console.log('Missing fields'); //debugger
        return false; // All fields are not present
    }

    if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string') { //check if string
        //console.log('Invalid field type');
        return false; // Field types are not valid
    }

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') { //check if empty
        //console.log('Empty first name, last name, or email');
        return false; // First name, last name, or email is empty
    }


    if (!validator.isEmail(email)) { //check if valid email
        //console.log('Invalid email'); //debugger
        return false; // Email is not in a valid format
    }

    if (typeof age !== 'number' || age < 18) { //check if age is atleast 18
        //console.log('Invalid age'); //debugger
        return false; // Age is not valid
    }

    const uniqueID = generateUniqueID(firstName, lastName);
    const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`;

    try {
        appendFileSync('users.txt', userData);
        //console.log('User saved:', userData); //debugger
        return true;
    } catch (err) {
        //console.error('Error writing to file:', err); //debugger
        return false;
    }
}

export { generateUniqueID, addAccount };
