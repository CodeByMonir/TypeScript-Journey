// step: 1
// export const greetings = () => {
//     console.log("Hello from the module!");
// }
// step: 2
// export {}
// const greetings = () => {
//   console.log("Hello from the module!");
// };
// greetings();
// step: 3 is working from tsconfig.json using "moduleDetection": "force"
const greetings = () => {
    console.log("Hello from the module!");
};
greetings();
export {};
