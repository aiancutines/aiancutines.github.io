import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

//function for generating unique id
function generateUniqueID(first_name, last_name){
    return (first_name.charAt(0).toLowerCase() + last_name.toLowerCase() + uuidv4().substring(0,8));
}

function addAccount(first_name, last_name, email, age){
    const details = [first_name, last_name, email, age];
    let regex = /^[a-zA-Z]+$/;

    // if (regex.test(first_name) == false || regex.test(last_name)){
    //     return "Condition/s are not met.";
    // }

    //check if valid email
    var hasValidEmail = false;
    if(validator.isEmail(email))
        hasValidEmail = true;
    if(!hasValidEmail)
        return false;

    //check if valid age
    var hasValidAge = false;
    if(age >= 18)
        hasValidAge = true;
    if(!hasValidAge)
        return false;

    try {
          appendFileSync('user.txt', first_name + ", " + last_name + ", " + email + ", " + age + ", " + generateUniqueID(first_name, last_name));
        } catch (err) {
          /* Handle the error */
        } 

    return true;
}

export {generateUniqueID, addAccount};
