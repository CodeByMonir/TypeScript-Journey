//* Top Types

let helloWorld: any = "Hello World";
helloWorld = 42;

helloWorld.length; // No error, but will be undefined at runtime

console.log(helloWorld); // undefined

const something : unknown = "Hello World";

// something.length; // Error: Object is of type 'unknown'.




//* Core Types

let someThing1: unknown; // its okay
//! let someThing1: void; // it is top type and it can't be assigned to any other type except void and undefined

const num: number = 42;
let nothing : void;

// someThing1 = num; // OK

someThing1 = nothing; // It also will okay


type Status = "pending" | "success"

let someStatus: string;

let status: Status = "pending";

someStatus = status;





//* Nullish Type


interface User {
    name: string;
}

type loggedInUser = User | null;

const currentUser: loggedInUser = null;





//* Unit Type

const greet = () => {
    console.log("Hello World");
}

// const greetings: string = greet(); // It will throw an error because greet() returns void and void is not assignable to string

someThing1 = greet(); // It will okay because greet() returns void and void is a top type





//* Sub type of Unit Type

const anotherGreet = () : undefined => {
    console.log("Hello World from anotherGreet");
    
}

const greetings: void = anotherGreet();

console.log(greetings)


//* Bottom Type

const getError = (msg: string) => {
    throw new Error(msg);
}

const x: string = getError('its an error.');  // here we can set any type for x 

