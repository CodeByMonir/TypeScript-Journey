//* Some caveat of type guard

const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log("Null");
  }
};

printAll(null);

//* Equality

const compare = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x, y);
  }
};

const showAll = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
        return;
      }
      console.log("x");
      return;
    }

    return;
    console.log("empty");
  }
};

showAll("a quick brown fox jumps over the lazy dog.");

//* "in" operator

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};

//* "instanceof" check

const date = new Date();
const err = new Error("Something Went Wrong!");

console.log(date instanceof Date);
console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }

  const date = new Date(x);
  console.log(date.toISOString());
};


showDate("12-12-1971")





//* Discriminated Union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

const getArea = (shape: Circle | Square) => {
    if(shape.kind === "circle"){
        console.log(shape.radius);
    }else {
        console.log(shape.sideLength);
    }
}