"use strict";
// const arr: Array<string> = ["Monir", "John"];
const arr = ["Monir", "John"];
const numArr = [1, 2, 3, 4, 5];
console.log(arr, numArr);
const dhakaLatLong = [23.8103, 90.4125];
dhakaLatLong.push(90.4125); // Error: Property 'push' does not exist on type 'readonly [number, number]'.
