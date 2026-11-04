const sum = (...numbers: number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0);
}


sum(1, 2, 3, 4, 5);


const logUserAction = (...args: [name: string, age: number, isAdmin: boolean]) => {
    const [name, age, isAdmin] = args;
    console.log(name + ' ' + age + ' ' + isAdmin);
}

logUserAction("Alice", 30, true)