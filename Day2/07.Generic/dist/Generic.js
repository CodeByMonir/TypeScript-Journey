const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("ABC");
const numArr = wrapInArray(123);
console.log(stringArr, numArr);
export {};
