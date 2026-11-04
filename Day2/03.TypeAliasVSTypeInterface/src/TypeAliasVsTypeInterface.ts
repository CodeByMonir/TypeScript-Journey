//? Interface is generally  connected to objects

//? Type alias is more connected to literals, unions, tuples, primitives

//TODO : Type Alias

type ID = number;

//! interface id = number; // This will throw an error because interface cannot be used to define a primitive type

type Role = "admin" | "user" | "guest";

//! interface Role = "admin" | "user" | "guest"; // This will throw an error because interface cannot be used to define a union type

interface User {
  name: string;
  id: ID;
  role: "admin" | "user" | "guest";
}

const user: User = {
  id: 123,
  name: "John Doe",
  role: "guest",
};

//TODO : Type Interface

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  species: "Felix Catus",
  breed: "Persian",
};

console.log(cat);

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  //? "&" is used to combine two types together or intersection
  model: string;
};

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
};

console.log(car);

//? interface type
interface Employee {
  name: string;
}

interface Employee {
  id: number;
}

const employee: Employee = {
  name: "Jane Doe",
  id: 456,
};

console.log(employee);

//? alias type

// type IEmployee = {
//   name: string;
// }

//! same name type alias cannot be defined again, it will throw an error

// type IEmployee = {
//   id: number;
// }

// const iEmployee: IEmployee = {
//   name: "Jane Doe",
//   id: 456,
// };

// console.log(iEmployee);