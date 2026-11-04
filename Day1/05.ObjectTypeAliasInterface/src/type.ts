type Address = {
    holdingNumber: number;
    street: string;
    city: string;
    country: string;
}

// it is a type alias
type userType = {
    name : string;
    age : number;
    isAdmin? : boolean;
    action: () => void;
    badge: string[];
    address: Address;
}

// it is an interface
interface userInterface {
    name : string;
    age : number;
    isAdmin? : boolean;
    action: () => void;
    badge: string[];
}


const user0 : userType= {
    name: "John",
    age: 30,
    isAdmin: false,

    action: () => {
        console.log("Action performed");
    },
    badge: ["user", "admin", "moderator"],
    address: {
        holdingNumber: 123,
        street: "Main Street",
        city: "New York",
        country: "USA"
    }
};

const user1 : userInterface= {
    name: "Jane",
    age: 25,
    isAdmin: true,
    action: () => {
        console.log("Action performed");
    },
    badge: ["user", "admin"]
};