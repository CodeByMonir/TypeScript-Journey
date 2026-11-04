//* typeof
// let x = 123;
let x = ["Monir Hossen"];
console.log(typeof x === "object");
//* Type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: "Monir",
    address: {
        street: "abc"
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("User not exist");
};
showAddress(loggedInUser);
export {};
