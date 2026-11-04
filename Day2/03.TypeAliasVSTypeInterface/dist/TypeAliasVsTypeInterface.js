//? Interface is generally  connected to objects
const user = {
    id: 123,
    name: "John Doe",
    role: "guest",
};
const cat = {
    species: "Felix Catus",
    breed: "Persian",
};
console.log(cat);
const car = {
    brand: "Toyota",
    model: "Corolla",
};
console.log(car);
const employee = {
    name: "Jane Doe",
    id: 456,
};
console.log(employee);
export {};
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
