//* "as" Assertion
const someStatus = "pending";
const showStatus = (status) => {
    console.log("Your application is" + " " + status);
};
showStatus(someStatus);
const config = {
    port: 5000,
};
// const currentPort: number = config.port!;
const currentPort = config.port;
//* constant assertion
const configuration = {
    port: 8000,
    prefix: "/api/v1"
};
export {};
