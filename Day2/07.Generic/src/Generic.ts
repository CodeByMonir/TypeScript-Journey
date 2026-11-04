// const wrapInArray = (value: string | number) => {
//     return [value];
// }

const wrapInArray = <t>(value: t) => {
  return [value];
};

const stringArr = wrapInArray("ABC");
const numArr = wrapInArray(123);
console.log(stringArr, numArr);

stringArr.map((item) => item.toUpperCase());
// numArr.map((item) => item.toUpperCase());

interface User {
    name: string;
    role: string;
}

interface Blog {
  data: {
    name: string;
    description: string;
    date: string;
  };
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: ApiResponse<User> = {
  statusCode: 200,
  success: true,
  data: {
    name: "monir",
    role: "admin",
  },
};