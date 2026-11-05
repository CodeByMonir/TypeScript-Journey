//* Inheritance: a manager is an employee and additional responsibility

class Employee {
	constructor(
		public name: string,
		// private _baseSalary: number, //! it can't be read or writeable
		protected _baseSalary: number, //* it is only readable
	) {}

	// get baseSalary(): number {
	// 	// this is to read
	// 	return this._baseSalary;
	// }

	set baseSalary(newSalary: number) {
		// this is to set new salary
		if (newSalary < 0) {
			throw new Error("Salary can't be negative value");
		} else {
			this._baseSalary = newSalary;
		}
	}

	describe(): string {
		return `${this.name} earns ${this.baseSalary}`;
	}
}

class Manager extends Employee {
	// teamMembers: number;

	// constructor(name: string, _baseSalary: number, teamMembers: number) {
	// 	super(name, _baseSalary);
	// 	this.teamMembers = teamMembers;
	// }

	constructor(
        name: string,
        _baseSalary: number,
        public teamMembers: number
    ) {
		super(name, _baseSalary);
	}

    describeWork(): string{
        return `${this.name} manage ${this.teamMembers} peoples.`
    }

    describeManager(): string {
        return `${this.name} earns ${this._baseSalary}`
    }
}

const employee = new Employee("Monir", 24000);

console.log(employee);


const manager = new Manager("Manager", 50000, 25);
console.log(manager, manager.describeWork());
console.log(manager.describeManager());
