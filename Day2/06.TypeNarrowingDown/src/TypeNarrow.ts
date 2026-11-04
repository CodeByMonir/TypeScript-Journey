//* typeof


// let x = 123;
let x = ["Monir Hossen"];

console.log(typeof x === "object");


//* Type Guard

const print = (value: string | number | never) => {
    if(typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number"){
        return value;
    } else {
        return value;
    }
}


//* Truthiness

type User = {
    name: string;
    address: {
        street: string;
    }
} | null;

const loggedInUser : User = {
    name: "Monir",
    address: {
        street: "abc"
    }
}

const showAddress = (user: User) => {
    if(user && user.address) {
        console.log(user.address.street);

        return;
    }

    throw new Error("User not exist")
}

showAddress(loggedInUser)