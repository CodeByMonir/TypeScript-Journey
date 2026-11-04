const concatName = (firstName: string, lastName?: string) => {
    if(!lastName){
        return firstName;
    }
    return firstName + " " + lastName;
}

console.log(concatName("Monir", "Hossen")); // lastName is not necessary because it is optional parameter



// this function is a void function because it does not return anything. It just prints the greeting message to the console.
const greeting = (fullName: string, greeting = "Hello"): void => {
    console.log(greeting + " " + fullName);
}


// greeting("Monir Hossen", 5646); // this will give an error because the second parameter is a string but we are passing a number. So, we need to pass a string as the second parameter.