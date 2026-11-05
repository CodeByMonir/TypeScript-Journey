//* Polymorphism: different employee respond differently to the same method call


class Employee {
	constructor(
		public name: string,
		protected _baseSalary: number,
	) {}

	get baseSalary(): number {
		return this._baseSalary;
	}

	set baseSalary(newSalary: number) {
		if (newSalary < 0) {
			throw new Error("Salary can't be negative value");
		} else {
			this._baseSalary = newSalary;
		}
	}

	describe(): string {
		return `${this.name} earns ${this.baseSalary}`;
	}

    calculatePay(taxRate: number){   // eidarei niche override korche.
        return this.baseSalary - this.baseSalary * taxRate;
    }
}

class Manager extends Employee {
    override calculatePay(){
        return this.baseSalary + 5000;
    }
}


class Developer extends Employee {
	constructor(
		name: string,
		_baseSalary: number,
		public type: string,
	) {
		super(name, _baseSalary);
	}

	override calculatePay(taxRate: number) {
		return this.baseSalary + 3000 - this.baseSalary * taxRate;
	}
}

const employee = new Employee("Monir", 20000)
const manager = new Manager("Manager", 40000)
const developer = new Developer("Developer", 480000, "Full-Stack")

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.1));