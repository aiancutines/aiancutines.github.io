import {addAccount} from './index.js'

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 17]));
console.log(addAccount(["Alan", "Turing", "aturing", 58]));