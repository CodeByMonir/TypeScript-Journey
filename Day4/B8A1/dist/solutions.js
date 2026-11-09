let multiplyValue = (value, multiplier) => {
    return value * (multiplier === undefined ? 2 : multiplier);
};
let processInput = (value) => {
    if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else {
        return value ? "Active" : "Inactive";
    }
};
let formatCoordinate = ([latitude, longitude, locationName]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
let concatenateArrays = (...arr) => {
    return arr.flat();
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        age < 18
            ? reject(new Error("Access Denied: Must be 18 or older"))
            : setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
    });
};
export {};
