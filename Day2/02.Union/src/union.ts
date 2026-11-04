// literal Type

type Status = "pending"

const status : Status = "pending"

console.log(status)


// Basic Union Type

type Identity = string | number

const identity : Identity = "John Doe"
const identity2 : Identity = 1234567890

console.log(identity, identity2)




// literal Union Type

type Role = "admin" | "user" | "guest"

const role : Role = "admin"
const role2 : Role = "user"
const role3 : Role = "guest"

console.log(role, role2, role3)


// Object Union Type
type Mod = {
    id: number;
    email: string;
    role: "mod";
};

type Admin = {
    id: number;
    email: string;
    role: "admin";
};

type Guest = {
    id: number;
    email: string;
    role: "guest";
};

const mod : Mod = { id: 1, email: "john@example.com", role: "mod" };
const admin : Admin = { id: 2, email: "jane@example.com", role: "admin" };
const guest : Guest = { id: 3, email: "bob@example.com", role: "guest" };

console.log(mod, admin, guest);

type UserRole = Mod | Admin | Guest;

const user : UserRole = { id: 1, email: "john@example.com", role: "mod" };

console.log(user);