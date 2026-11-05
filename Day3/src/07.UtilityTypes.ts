//* Utility Types

//*Partial

interface User {
	id: string;
	name: string;
	email: string;
}

interface OptionalUser {
	id?: string;
	name?: string;
	email?: string;
}

const updateProfile = (id: string, data: Partial<User>) => {
	//TODO: backend logics
};

updateProfile("Monir", { name: "Mir" });

//* Required

interface Config {
	apiKey?: string;
	timeout?: number;
}

const initialize = (config: Required<Config>) => {
	// some logics
};

initialize({ apiKey: "api/dash", timeout: 30000 });

//* Pick

interface Product {
	id: string;
	name: string;
    price: number;
    description: string;
}

type ProductPreview = Pick<Product, "name" | "description">

const preview: ProductPreview = {
    name: "monir",
    description: "abc"
}



//* Omit

interface Employee {
    id: number;
    name: string;
    salary: number;
    nid: string;
}


type PublicEmployee = Omit<Employee, "salary" | "nid">

const directoryEntry: PublicEmployee = {
    id: 42,
    name: "Monir",
}


//* Record

type Environment = "development" | "staging" | "production";


const apiUrls : Record<Environment, string> = {
    development: "https://localhost:3000",
    staging: "https://localhost:5000",
    production: "https://localhost:8080",
    // testing: "https://api.com"
}