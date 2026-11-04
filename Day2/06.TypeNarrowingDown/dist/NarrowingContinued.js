//* Some caveat of type guard
const printAll = (x) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("Null");
    }
};
printAll(null);
//* Equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const showAll = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
                return;
            }
            console.log("x");
            return;
        }
        return;
        console.log("empty");
    }
};
showAll("a quick brown fox jumps over the lazy dog.");
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
//* "instanceof" check
const date = new Date();
const err = new Error("Something Went Wrong!");
console.log(date instanceof Date);
console.log(err instanceof Error);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-12-1971");
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
