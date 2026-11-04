let myString = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myArray: number[] = [1, 2, 3, 4, 5];
let myTuple: [string, number] = ["Hello", 42];
let myEnum: { Red: 0; Green: 1; Blue: 2 } = { Red: 0, Green: 1, Blue: 2 };
let myAny: any = "This can be any type";
let mySymbol: symbol = Symbol("mySymbol");
let bigInt: bigint = 9007199254740991n;

// myString = 1354;

const addTwo = (a: number, b: number) => {
  return a + b;
};

console.log(addTwo(100, 50));
