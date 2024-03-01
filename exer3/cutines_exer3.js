function validatePassword(password, passwordTemp){ //function for password checking
    if(password.length < 8){ //check length
        return false;
    }

    if (password !== passwordTemp){ //check if same
        return false;
    }

    //variable declaration
    var capsChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowChar = "abcdefghijklmnopqrstuvwxyz" ;
    var number = "0123456789";
    
    //check if theres a capital letter
    var hasCaps = false;
    for (var i=0; i<password.length; i++){
        if(capsChar.includes(password[i])){
            hasCaps = true;    
            break;
        }
    }
    if(!hasCaps){
        return false;
    }

    //check if theres a lowercase letter
    var hasLower = false;
    for (var i=0; i<password.length; i++){
        if(lowChar.includes(password[i])){
            hasLower = true;    
            break;
        }
    }
    if(!hasLower){
        return false;
    }

    //check if theres a number
    var hasNumber = false;
    for (var i=0; i<password.length; i++){
        if(number.includes(password[i])){
            hasNumber = true;    
            break;
        }
    }
    if(!hasNumber){
        return false;
    }

    
    return true;
}

//function for reversing the password
function reverse(password){
    var tempHolder = [];
    for (var i=password.length-1; i>=0; i--){
        tempHolder.push(password[i]);
    }
    temp = tempHolder.join("")
    return temp;
}

//printing the name and new password
function storePassword(name, password, passwordTemp){
    if(validatePassword(password) == true)
        return{
            name: name,
            newpassword: passwordTemp
        }
    else{
        return{
            name: name,
            newpassword: reverse(password)
        }
    }
}

//test
console.log(validatePassword("helloworld", "hello"));     // returns false
console.log(validatePassword("hello", "hello"));    	  // returns false
console.log(validatePassword("hello1234", "hello1234"));  // returns false
console.log(validatePassword("Hello1234", "Hello1234"));  // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"));  // returns false

console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"Pass123"}
console.log(storePassword("John", "Pass123", "Pass12345"));