let multiplyValue = (value: number, multiplier?: number): number => {
	return value * (multiplier === undefined ? 2 : multiplier)
};






let processInput = (value: string | number | boolean): string | number => {
	if (typeof value === "number") {
		return value * 10;
	} else if (typeof value === "string") {
		return value.trim().toLowerCase();
	} else {
		return value ? "Active" : "Inactive";
	}
};






let formatCoordinate = ([latitude, longitude, locationName]: readonly [
	number,
	number,
	string,
]): string => {
	return `Location: ${locationName} (${latitude}, ${longitude})`;
};





let concatenateArrays = <T>(...arr: T[][]): T[] => {
	return arr.flat();
};

interface Course {
	title: string;
	students: number;
	isPublished: boolean;
}





const getPopularCourses = (
	courses: Course[],
	minStudents: number,
): Course[] => {
	return courses.filter(
		(course) => course.isPublished && course.students >= minStudents,
	);
};





const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
	return items.map((item) => item[key]);
};

interface User {
	id: number;
	name: string;
	role: string;
}





class Employee {
	constructor(
		protected name: string,
		private baseSalary: number,
	) {}

	getDetails(): string {
		return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
	}
}

class Manager extends Employee {
	constructor(
		name: string,
		baseSalary: number,
		private department: string,
	) {
		super(name, baseSalary);
	}

	getRoleInfo(): string {
		return `Manager of ${this.department}: ${this.name}`;
	}
}




const validateAgeAsync = (age: number): Promise<string> => {
	return new Promise((resolve, reject) => {
		age < 18
		? reject(new Error("Access Denied: Must be 18 or older"))
		: setTimeout(() => {
			resolve("Access Granted")
		}, 1000)


	})
};